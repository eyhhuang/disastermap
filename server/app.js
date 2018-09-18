const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');
const async = require('async');
const MongoClient = require('mongodb').MongoClient;
var mongourl = 'mongodb://localhost:27017/map';
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
    var q = req.query.q;
    var category = req.query.category;
    MongoClient.connect(mongourl,(err,db)=>{
        var cursor = db.db("map").collection("news").find({keyword: q, cat: category});
        if(cursor){
            res.status(200).json(cursor.news);
        }else{

        }
    })
})

//app.get('/news/:q?/:category?', cors(), (req, res)=>{
var getNews = (q, category )=>{
    MongoClient.connect(mongourl,(err,db)=>{
        if(err){
            throw err;
        }
        let news = [];
        let url = 'https://newsapi.org/v2/top-headlines?' +
                  'apiKey=4ebffe95806f4b39ab9c4f39f98c73a8';
    
        if (q) {
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
        }, (err)=> {
            if (err) {
throw err;                db.close();
            } else {
                var newsObj = {"keyword": q, "cat": category, "news": news};
                db.db("map").collection("news").insertOne(newsObj, (err2,result)=>{
                    if(err2){
                        res.status(500).json(`error again: ${err2}`);
                        db.close();
                    }else{
                        res.status(200).json(newsObj.news);
                    }
                });
            }
        });
    })
    
}

const port = process.env.PORT || 4099;
console.log(`listening on port: ${port}`);
app.listen(port);
