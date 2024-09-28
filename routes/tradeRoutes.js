const express = require('express');
const multer = require('multer');
const { uploadCSV } = require('../controllers/trade.controller');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route to upload CSV
router.post('/upload', upload.single('file'), uploadCSV);

module.exports = router;
