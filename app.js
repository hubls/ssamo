const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const stream = require('./config/logger');
const boardController = require('./controllers/boardController');
const sideController = require('./controllers/sideController');
const imageController = require('./controllers/imageController');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// log file setup
app.use(morgan('HTTP/:http-version :method :remote-addr :url :remote-user :status :res[content-length] :referrer :user-agent :response-time ms', { stream }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get(
  ['/api/side/:sidename', '/side/:sidename/list'],
  sideController.getData
);

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

// 서버를 시작하는 코드 추가
const port = process.env.PORT || 9694;
app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
