const boardService = require('../services/boardService');

class BoardController {
  static boardNames = ['webtoons', 'community', 'game', 'news', 'shopping'];

  static async getData (req, res) {
    const boardName =  req.params.boardname;

    if (!BoardController.boardNames.includes(boardName)) {
      return res.status(404).send('잘못된 경로입니다.')
    }

    const result = await boardService.getAllData(boardName);
    return res.send(result);
  }

  static async uploadData (req, res) {
    const boardService = new boardService();

    const boardName = req.params.boardname;
    const imageName = req.file.filename;
    const siteInformation = req.body.siteInformation;

    if (!BoardController.boardNames.includes(boardName)) {
      return res.status(404).send('잘못된 경로입니다.')
    }

    try {
      const result = await boardService.insertData(boardName, imageName, siteInformation);

      return res.send(result);
    } catch (err) {
      return res.send(err);
    }
  }
}

module.exports = BoardController;