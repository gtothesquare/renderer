

var express = require('express'),
  exphbs  = require('express-handlebars');




module.exports = function App(rootDir) {
  var hbsConfig = {
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: rootDir + '/lib/views/layouts'
  };
  var app = express();
  app.set('views', rootDir + '/lib/views/');
  app.engine('.hbs', exphbs(hbsConfig));
  app.set('view engine', '.hbs');


  app.get('/', function (req, res) {
    res.render('home');
  });

  return app;
};