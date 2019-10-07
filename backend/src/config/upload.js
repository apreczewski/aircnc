const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, cb) => {
      const extname = path.extname(file.originalname);
      const name = path.extname(file.originalname, extname);

      cb(null, `${name}-${Date.now()}${extname}`);
    }
  })
};
