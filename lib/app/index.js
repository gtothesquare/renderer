

var express = require('express');
var exphbs  = require('express-handlebars');
var cfg = require('_/config');
var app = express();
//var hbsConfig = {
//  extname: '.hbs',
//  defaultLayout: 'main',
//  layoutsDir: cfg.layoutsDir
//};

var options = {
  maxAge: '1d'
};


//app.set('views', cfg.viewDir);
//app.engine('.hbs', exphbs(hbsConfig));
//app.set('view engine', '.hbs');
//
//// render should go first
//app.get(['/','/home'], function (req, res) {
//  // no need of next, that is what triggers the
//  // Can't set headers after they are sent.
//  res.render('home');
//});

//app.get('404', function (req, res) {
//  res.render('404');
//});

app.use(express.static(cfg.pubDir));

app.use(require('_/middleware/notFound'));
app.use(require('_/middleware/handleError'));

module.exports = app;


