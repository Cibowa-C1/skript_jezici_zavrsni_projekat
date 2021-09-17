const express = require('express');
const app = express();
const disks = require('./routes/Baza.js');

let port = 81;
const history = require('connect-history-api-fallback');
const path = require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


app.use('/api', disks);


const staticMiddleware = express.static(path.join(__dirname, 'dist'));



app.use(staticMiddleware);
app.use(history());
app.use(staticMiddleware);

app.listen(port);
