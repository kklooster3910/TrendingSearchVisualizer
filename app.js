const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();
const cors = require('cors')
// const cors = require('cors');
// const bodyParser = require('body-parser')

app.use(cors());
app.get('/', (req, res) => { 
        res.sendFile(path.join(__dirname+'/index.html')
    )}
)

app.use('/', router);
// app.use(express.static(__dirname + "/entry.js"));
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`App listening on port ${port} fam!`));

