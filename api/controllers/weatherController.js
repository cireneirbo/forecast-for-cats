// imports
const axios = require("axios");
require("dotenv").config();


// weather API
exports.index = function(req, res) {
  let weatherData = {};
  async function getWeather() {
    const apiKey = process.env.OPEN_WEATHER_MAPS_API_KEY;
    const lat = "27.49";
    const lon = "-82.57";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    
    try {
      const response = await axios.get(url);
      console.log(response.data);
      weatherData = response.data;
      // return response.data;
      
    } catch (error) {
      next(error);
    }

    
  }

  getWeather();
  if (weatherData != {}) {
    res.json( { title: 'Weather', weather_data: weatherData} );
    console.log(weatherData);
  }
  console.log(weatherData);
  
  
    
};






