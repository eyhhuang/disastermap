const express = require('express');
const cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req,res)=>{
    //do stuff
    res.status(200).json('success');
});

app.get('/ping', cors(),  (req,res)=>{
    res.status(200).json('api working');
})
const port = process.env.PORT || 4099;
console.log('listening on port: '+port);
app.listen(port);