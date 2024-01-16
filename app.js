const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const webtoonsRouter = require('./routes/webtoonsRouter');

const app = express();

const _loggerFormat = decodeURIComponent(':date :username %1b[1m:method%1b[0m %1b[33m:url%1b[0m :status :res[content-length] bytes :response-time ms');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', webtoonsRouter);

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

// 서버를 시작하는 코드 추가
const port = process.env.PORT || 9694;
app.listen(port, function() {
  console.log('Server is running on port ' + port);
});

module.exports = app;
