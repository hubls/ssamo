const path = require('path');

class ImageService {
  static async getImagePath(boardName, imageName) {
    return path.join(__dirname,'../public/images' ,boardName ,imageName)
  }
}

module.exports = ImageService;