const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();
const cors = require('cors')
const googleTrends = require('google-trends-api')
// const cors = require('cors');
// const bodyParser = require('body-parser')
// not sure if I even need to use cors here?
app.use(cors());
app.get('/', (req, res) => { 
        res.sendFile(path.join(__dirname+'/index.html')
    )}
)

app.get('/interestOverTime/:keyword', (req, res) => {
    return googleTrends.interestOverTime({
        keyword: req.params.keyword
    })
    .then(data => res.json(JSON.parse(data))
    .catch(err => { 
        console.log(err);
        res.sendStatus(500);
    }))
});

app.get('/dailyTrends/:geoLocation', (req, res) => {
    return googleTrends.dailyTrends({
       trendDate: new Date(),
       geo: req.params.geoLocation
    })
    .then(data => res.json(JSON.parse(data))
    // .then(data => console.log(data))
    // .then(data => res.send(data))
    .catch(err => { 
        console.log(err);
        res.sendStatus(500);
    })
    )
});

// app.get('/dailyTrends/:geoLocation', (req, res) => {
//     return googleTrends.dailyTrends({
//        trendDate: new Date(),
//        geo: req.params.geoLocation
//     })
//     .then(data => res.json(JSON.parse(data))
//     .catch(err => { 
//         console.log(err);
//         res.sendStatus(500);
//     }))
// });

app.get('/interestByRegion/:searchTerm', (req, res) => {
    return googleTrends.interestByRegion({
       keyword: req.params.searchTerm,
    //    startTime: new Date(),  -- optional... defaults to new Date('2004-01-01')
    //    endTime: new Date(Date.now()) -- optional... defaults to my comment
    //    geo: -- optional defaults to worldwide
    })
    .then(data => res.json(JSON.parse(data))
    .catch(err => { 
        console.log(err);
        res.sendStatus(500);
    }))
});

app.get('/realTimeTrends/:geoLocation', (req, res) => {
    return googleTrends.realTimeTrends({
       geo: req.params.geoLocation,
    //    startTime: new Date(),  -- optional... defaults to new Date('2004-01-01')
    //    endTime: new Date(Date.now()) -- optional... defaults to my comment
    //    geo: -- optional defaults to worldwide
    })
    .then(data => res.json(JSON.parse(data))
    .catch(err => { 
        console.log(err);
        res.sendStatus(500);
    }))
});

app.use('/', router);
// app.use(express.static(__dirname + "/entry.js"));
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`App listening on port ${port} fam!`));

