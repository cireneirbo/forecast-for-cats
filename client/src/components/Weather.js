import axios from 'axios';
// import fs from 'fs';
// import env from "dotenv";
// env.config();

//require('dotenv').config();

function Weather() {
  
  // const { OPEN_WEATHER_MAPS_API_KEY } = process.env;

  const apiKey = "placeholder";
  async function getWeather() {
    const lat = "27.49";
    const lon = "-82.57";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    //console.log(process.env.development.OPEN_WEATHER_MAPS_API_KEY);
    try {
      const response = await axios.get(url);
      console.log(response);
      

      
    } catch (error) {
      console.error(error);
    }
  }
  getWeather();
  return (
    <div className="Weather">
      <p>Weather</p>
    </div>
  );
}

export default Weather;