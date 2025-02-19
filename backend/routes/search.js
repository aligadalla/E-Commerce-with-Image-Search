const express = require('express');
const searchController = require('../controllers/search');

const router = express.Router();

router.post('/image', searchController.imageSearch);

module.exports = router;