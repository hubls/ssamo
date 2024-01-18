const MySQLRepository = require('../db/MySQLRepository');

class BoardService {
  static async getAllData(boardName) {
    const sql = `SELECT * FROM ${boardName} ORDER BY visitorCount DESC`;
    const result = await MySQLRepository.executeQuery(sql);

    return result;
  }

  async insertData(boardName, imageName, siteInformation) {
    const name = siteInformation.name;
    const url = siteInformation.url;
    const visitorCount = siteInformation.visitorCount;

    const sql = `INSERT INTO ${boardName} (name, url, visitorCount, imagePath , imageName) VALUES (?, ?, ?, ?, ?)`;

    try {
      await MySQLRepository.executeQuery(sql, [name, url, visitorCount, boardName, imageName]);

      return JSON.stringify({ success: true })
    } catch (err) {
      throw err;
    }
  }
}

module.exports = BoardService;