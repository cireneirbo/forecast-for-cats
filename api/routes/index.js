const express = require('express');
const router = express.Router();

// Require controller modules.
const weather_controller = require('../controllers/weatherController');

// GET api basic info.
router.get('/', weather_controller.index);

// GET weather info.
router.get('/weather', weather_controller.weather);


module.exports = router;