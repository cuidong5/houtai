const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(8005);

const limit = require('./routes/limit');

app.use(bodyParser.urlencoded({}));

app.use('/limit',limit);



app.use(express.static('./public'));