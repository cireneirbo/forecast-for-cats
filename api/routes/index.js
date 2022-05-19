const express = require('express');
const router = express.Router();

// Require controller modules.
const weather_controller = require('../controllers/weatherController');

// GET weather info.
router.get('/', weather_controller.index);


module.exports = router;