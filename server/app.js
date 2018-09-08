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

app.get('/countries', cors(), (req,res)=>{
    res.status(200).json(
{
        'Argentina': 'ar',
    'Australia': 'au',
    'Austria': 'at',
    'Belgium': 'be',
    'Brazil': 'br',
    'Bulgaria': 'bg',
    'Canada': 'ca',
    'China': 'cn',
    'Colombia': 'co',
    'Cuba': 'cu',
    'Czech Republic': 'cz',
    'Egypt': 'eg',
    'France': 'fr',
    'Germany': 'de',
    'Greece': 'ge',
    'Hong Kong': 'hk',
    'Hungary': 'hu',
    'India': 'in',
    'Indonesia': 'id',
    'Ireland': 'id',
    'Israel': 'il',
    'Italy': 'it',
    'Japan': 'jp',
    'Latvia': 'lv',
    'Lithuania': 'lt',
    'Malaysia': 'my',
    'Mexico': 'mx',
    'Morocco': 'ma',
    'Netherlands': 'nl',
    'New Zealand': 'nz',
    'Nigeria': 'ng',
    'Norway': 'no',
    'Philippines': 'ph',
    'Poland': 'pl',
    'Portugal': 'pt',
    'Romania': 'ro',
    'Russia': 'ru',
    'Saudi Arabia': 'sa',
    'Serbia': 'rs',
    'Singapore': 'sg',
    'Slovakia': 'sk',
    'Slovenia': 'si',
    'South Africa': 'za',
    'South Korea': 'kr',
    'Sweden': 'se',
    'Switzerland': 'ch',
    'Taiwan': 'tw',
    'Thailand': 'th',
    'Turkey': 'tr',
    'UAE': 'ae',
    'Ukraine': 'ua',
    'United Kingdom': 'gb',
    'United States': 'us',
    'Venezuela': 've'
}
    )
} )

const port = process.env.PORT || 4099;
console.log(`listening on port: ${port}`);
app.listen(port);
