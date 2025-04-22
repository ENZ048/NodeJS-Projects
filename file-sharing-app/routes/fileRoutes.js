const express = require('express');
const fileController = require('../controllers/fleController');
const upload = require('../middleware');

const router = express.Router();

router.post('/upload', upload.single("image"), fileController.fileUpload);

module.exports = router;