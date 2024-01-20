const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const boardController = require('./controllers/boardController');
const imageController = require('./controllers/imageController');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get(
  ['/api/board/:boardname', '/board/:boardname/list'],
  boardController.getData
);

app.post(
  ['/api/board/:boardname', '/api/board/:boardname'],
  boardController.uploadData
);

app.get(
  ['/api/image/:boardName/:imageName', '/image/:boardName/:imageName'],
  imageController.getBoardImage
);

// ============================================================================
// VUE APP
// ============================================================================
app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // 개발 환경에서만 에러 메시지를 제공합니다.
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 에러를 콘솔에 기록합니다.
  console.error(err);

  // 에러 페이지를 렌더링합니다.
  res.status(err.status || 500);

  // 요청이 API 요청인지 확인합니다.
  if (req.originalUrl.startsWith('/api/')) {
    // 만약 API 요청이면 JSON 형식으로 응답합니다.
    res.json({ error: err.message || '문제가 발생했습니다.' });
  } else {
    // 일반적인 요청이면 에러 페이지를 렌더링합니다.
    res.render('error');
  }
});

// 서버를 시작하는 코드 추가
const port = process.env.PORT || 9694;
app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
