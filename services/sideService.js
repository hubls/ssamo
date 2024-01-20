const MySQLRepository = require('../db/MySQLRepository');

class SideService {
  static async getAllData(sideName) {
    const sql = `SELECT * FROM ${sideName} ORDER BY position ASC`;
    const result = await MySQLRepository.executeQuery(sql);

    return result;
  }
}

module.exports = SideService;