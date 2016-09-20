var express = require('express');
var StockController = require('./routes/StockController');
var http = require('http');
var path = require('path');
var db = require('./models/db');
var app = express();
var session = require('express-session');
app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);


app.use(express.static(path.join(__dirname, 'public')));

if ('development'== app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', StockController.home);
app.post('/storeData', StockController.storeData);
app.post('/updateItems', StockController.updateItems);


http.createServer(app).listen(app.get('port'), function(){
  db.pg_migrate();
  console.log('Express server listening on port ' + app.get('port'));
});
