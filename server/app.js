import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res)=>{
    //do stuff
    res.status(200).json('success');
});

app.get('/ping', cors(),  (req, res)=>{
    res.status(200).json('api working');
})

const port = process.env.PORT || 4099;
console.log(`listening on port: ${port}`);
app.listen(port);