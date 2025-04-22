const multer = require('multer');
const path = require("node:path");
const { v4: uuidv4 } = require('uuid');

const filePath = path.join(__dirname, "uploaded");

const storage = multer.diskStorage({
    destination: filePath,
    filename: function(req, file, cb) {
        const fileExtention = path.extname(file.originalname);
        const fileName = uuidv4() + fileExtention;
        cb(null, fileName);
    }
});

const upload = multer({
    storage: storage
});

module.exports = upload;