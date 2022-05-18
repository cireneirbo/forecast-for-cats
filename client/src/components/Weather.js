import axios from 'axios';
//import fs from 'fs';
//require('dotenv').config();

function Weather() {
  
  async function getWeather() {
    const url = "https://api.weather.gov";
    const radarStation = "/radar/stations"
    const stationID = "/KTBW";
    // try {
    //   const response = await axios.get(url + radarStation + stationID);
      //console.log(response);
      // Finding A Weather Station
      // for(let i = 0; i < response.data.features.length; i++) {
      //   if(response.data.features[i].properties.name.includes("Tampa")){
      //     console.log(i); // returns 169 for Tampa
      //     console.log(response.data.features[169]); 
      //   }
      // }

      
    // } catch (error) {
    //   console.error(error);
    // }

    const zone = "/zones/forecast/FLZ255";
    try {
      const response = await axios.get(url + zone);
      console.log(response);
      // Finding A Weather Station
      // for(let i = 0; i < response.data.features.length; i++) {
      //   if(response.data.features[i].properties.name.includes("Tampa")){
      //     console.log(i); // returns 169 for Tampa
      //     console.log(response.data.features[1176]); 
      //   }
      // }

      
    } catch (error) {
      console.error(error);
    }
  }
  getWeather();
  return (
    <div className="Accuweather">
      <p>Weather</p>
    </div>
  );
}

export default Weather;