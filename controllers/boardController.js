const boardService = require('../services/boardService');

class BoardController {
  static boardNames = ['webtoons'];

  static async getData (req, res) {
    const boardName =  req.params.boardname;

    if (!BoardController.boardNames.includes(boardName)) {
      return res.status(404).send('잘못된 경로입니다.')
    }

    const result = await boardService.getAllData(boardName);
    return res.send(result);
  }
}

module.exports = BoardController;