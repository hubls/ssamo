const MySQLRepository = require('../db/MySQLRepository');

class BoardService {
  static async getAllData(boardName) {
    const sql = `SELECT * FROM ${boardName} ORDER BY visitorCount DESC`;
    const result = await MySQLRepository.executeQuery(sql);

    return result;
  }
}

module.exports = BoardService;