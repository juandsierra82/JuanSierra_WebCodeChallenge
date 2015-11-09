var express     = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',express.static(__dirname + '../../redditWebApp/www'));

module.exports = app;