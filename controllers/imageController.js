const imageService = require('../services/imageService');
const fs = require('fs').promises;

class ImageController {
  static async getBoardImage(req, res) {
    const boardName = req.params.boardName;
    const imageName = req.params.imageName;

    const imagePath = await imageService.getImagePath(boardName,imageName);

    try {
      await fs.access(imagePath);
      res.sendFile(imagePath);
    } catch (error) {
      res.status(404).send('Image Not Fount');
    }
  }
};

module.exports = ImageController;