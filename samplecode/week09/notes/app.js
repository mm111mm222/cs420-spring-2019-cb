var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var notes = require('./routes/notes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



var accessLogStream;
   if (process.env.REQUEST_LOG_FILE) {
       var logDirectory = path.dirname(process.env.REQUEST_LOG_FILE);
       fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
       accessLogStream = FileStreamRotator.getStream({
         filename: process.env.REQUEST_LOG_FILE,
         frequency: 'daily',
         verbose: false
        });
    }

    process.on('uncaughtException', function(err) {
      
      // log out our exceptions 
      // error("I've crashed!!! - "+ (err.stack || err));

    });

app.use(logger(process.env.REQUEST_LOG_FORMAT || 'dev', {
    stream: accessLogStream ? accessLogStream : process.stdout
}));

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/notes', notes);

app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.use('/vendor/bootstrap', express.static(
  path.join(__dirname, 'bower_components', 'bootstrap', 'dist')));
app.use('/vendor/jquery', express.static(
  path.join(__dirname, 'bower_components', 'jquery', 'dist')));

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
