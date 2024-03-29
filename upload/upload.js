const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + '&' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;