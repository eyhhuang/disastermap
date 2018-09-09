const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const async = require('async');
const MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/Disaster';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const countryMap = require('./countryMap.js');

var db;
app.use(cors());


app.get('/', (req, res)=>{
    //do stuff
    res.status(200).json('success');
});

app.get('/countryMap', cors(), (req, res)=>{
    res.status(200).json(countryMap);
})




app.get('/news/:q?/:category?', cors(), (req, res)=>{
    let news = [];
    let url = 'https://newsapi.org/v2/top-headlines?' +
              'apiKey=ef5f067cc3c44a88a400581d8fbbd26f';

    if (req.query.q) {
        url += '&q=' + req.query.q;
    }
    if (req.query.category) {
        url += '&category=' + req.query.category;
    }

    async.each(Object.keys(countryMap), function(country, cb) {
        request(url + '&country=' + countryMap[country]
            , function(err, res2, body) {
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
