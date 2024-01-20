const sideService = require('../services/sideService');
const boardService = require("../services/boardService");

class SideController {
  static SideNames = ['leftside', 'rightside'];

  static async getData (req, res) {
    const sideName =  req.params.sidename;

    if (!SideController.SideNames.includes(sideName)) {
      return res.status(404).send('잘못된 경로입니다.')
    }

    const result = await sideService.getAllData(sideName);
    return res.send(result);
  }
}

module.exports = SideController;