// imports
const axios = require("axios");
require("dotenv").config();

// index
exports.index = function(req, res) {

  res.send( { title: 'Index', data: "This API is free to use. Connect endpoint '/weather' for data."} );

};

// weather API
exports.weather = function(req, res) {

  async function getWeather() {

    const apiKey = process.env.OPEN_WEATHER_MAPS_API_KEY;
    const lat = "27.49";
    const lon = "-82.57";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      res.send( { title: 'Weather', weather_data: response.data} );
      
    } catch (error) {
      //console.log(error);
      res.send( { 
        title: 'Weather Error', 
        weather_data: { 
          "error_code": error.code, 
          "error_message": error.message
        } 
      } );
    }

  }

  getWeather(); 
    
};






