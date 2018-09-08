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

MongoClient.connect('mongodb://localhost:27017/Disaster', { useNewUrlParser: true },function (err, database) {
   if (err) 
   	throw err
   else
   {
	db = database;
	console.log('Connected to MongoDB');
	//Start app only after connection is ready
	const port = process.env.PORT || 4099;
    console.log(`listening on port: ${port}`);
    app.listen(port);

   }
 });
app.get('/', (req, res)=>{
    //do stuff
    res.status(200).json('success');
});

app.get('/countryMap', cors(), (req, res)=>{
    res.status(200).json(countryMap);
})

app.get('/news', cors(), (req,res)=>{
    db.db('Disaster').collection('News').find({}).toArray((err,result)=>{
        if(err)console.log(err);
        else 
    
        res.status(200).json(
            result
            
        )})
    })

app.get('/getNews', cors(), (req, res)=>{
    let news = [];
    async.each(Object.keys(countryMap), function(country, cb) {
        request('https://newsapi.org/v2/top-headlines?country=' +
                countryMap[country] +
                '&apiKey=26e301a2b13746dabc50dd96ba34fa0b', function(err, res2, body) {
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
                db.db('Disaster').collection('News').insert(news, (err,result)=>{
                    if(err){
                        res.status(500).send(err);
                    }else{
                        res.status(200).json(result);
                    }
                });
                db.close();
            

           // res.status(200).json(news);
        }
    });
})



