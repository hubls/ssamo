const mysql = require('mysql2/promise');
const dbConfig = require('./db_config.json');

class MySQLRepository {
  static #pool = mysql.createPool(dbConfig);

  static async executeQuery(sql, values) {
    let connection = null;

    try {
      connection = await MySQLRepository.#pool.getConnection();
      const [rows] = await connection.execute(sql, values);
      return rows;
    } catch (err) {
      console.log('err: ', err);
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}

module.exports = MySQLRepository