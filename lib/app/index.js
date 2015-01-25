

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

  // render should go first
  app.get(['/','/home'], function (req, res) {
    // no need of next, that is what triggers the
    // Can't set headers after they are sent.
    res.render('home');
  });

  app.use(express.static(rootDir + '/public'));

  return app;
};