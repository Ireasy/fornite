var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()


var indexRouter = require('./routes/index');
var freundeRouter = require('./routes/freunde');
var aboutmeRouter = require('./routes/aboutme');
var bestgearRouter = require('./routes/bestgear');

var database = require('./services/database');
var fortniteapi = require('./services/fortniteapi');
var time = require('./services/time');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('database', database);
app.set('fortniteapi', fortniteapi);
app.set('time', time);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/freunde', freundeRouter);
app.use('/aboutme', aboutmeRouter);
app.use('/bestgear', bestgearRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


