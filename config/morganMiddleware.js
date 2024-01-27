const morgan = require('morgan');
const logger = require('./logger');
const dotenv = require('dotenv');

dotenv.config();

const format = () => {
  const result = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
  return result;
};

const stream = {
  write: (message) => {
    // console.log(message);
    logger.info(message);
  },
};

// 로깅 스킵 여부 (만일 배포환경이면, 코드가 400 미만라면 함수를 리턴해 버려서 로그 기록 안함. 코드가 400 이상이면 로그 기록함)
// const skip = (_, res) => {
//   if (process.env.NODE_ENV === 'production') {
//     return res.ststusCode < 400;
//   }
//   return false;
// };

const morganMiddleware = morgan(format(), { stream });

module.exports = morganMiddleware;