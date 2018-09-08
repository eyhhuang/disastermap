const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const async = require('async');

const countryMap = require('./countryMap.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res)=>{
    //do stuff
    res.status(200).json('success');
});

app.get('/countryMap', cors(), (req, res)=>{
    res.status(200).json(countryMap);
})

app.get('/news', cors(), (req, res)=>{
    let news = [];
    async.each(Object.keys(countryMap), function(country, cb) {
        request('https://newsapi.org/v2/top-headlines?country=' +
                countryMap[country] +
                '&apiKey=c4671bd21d74439b92325d84c118e72e', function(err, res2, body) {
            if (err || res2.statusCode !== 200) {
                cb(err || res2);
            } else {
                body = JSON.parse(body);
                //console.log(body.articles);
                let newsWithCountryCode = body.articles.map(function(article) {
                    article.countryCode = countryMap[country];
                    article.country = country;
                    return article;
                });
                news = news.concat(newsWithCountryCode);
                cb();
            }
        });
    }, function(err) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(news);
        }
    });
})

const port = process.env.PORT || 4099;
console.log(`listening on port: ${port}`);
app.listen(port);
