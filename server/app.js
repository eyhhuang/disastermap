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