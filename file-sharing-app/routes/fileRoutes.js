const express = require('express');
const fileController = require('../controllers/fleController');
const upload = require('../middleware');

const router = express.Router();

router.post('/api/files/upload', upload.single("image"), fileController.fileUpload);

router.post('/api/files/share', fileController.fileShare);

router.get('/download/:id', fileController.fileDownload);

module.exports = router;