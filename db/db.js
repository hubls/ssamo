const mysql = require('mysql2');
const config = require('./db_config.json');

const pool = mysql.createPool(config);

pool.execute(
  `SELECT * FROM ??`,
  function (err, result, fields) {
    console.log(result);
  }
)