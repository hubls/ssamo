const mysql = require('mysql2');
const config = require('./db_config.json');

const connection = mysql.createConnection(config);

connection.query(
  'SELECT * FROM webtoons',
  function (err, result, fields) {
    console.log(result);
  }
)