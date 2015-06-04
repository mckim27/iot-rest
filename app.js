/****  set library ****/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require('date-utils');

/****    routes     ****/
var routes = require('./routes/index');
//var users = require('./routes/users');
var present = require('./routes/present');
var weather = require('./routes/weather');
/*var temp = require('./routes/temp');
var hum = require('./routes/hum');
var thi = require('./routes/thi');
var di = require('./routes/di');
var todos = require('./routes/todos');*/
var condition = require('./routes/condition');

var app = express();

/****  mongo db connect ****/
var mongoHost = '192.168.0.14:27017'
var mongoose = require('mongoose');
mongoose.connect('mongodb://' + mongoHost + '/iot-rest', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', 5000);
app.listen(app.get('port'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//app.use('/users', users);
app.use('/present/v1', present);
app.use('/weather/v1', weather);
app.use('/condition/v1', condition);
/*app.use('/condition/v1/temp', temp);
app.use('/condition/v1/hum', hum);
app.use('/condition/v1/thi', thi);
app.use('/condition/v1/di', di);*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
