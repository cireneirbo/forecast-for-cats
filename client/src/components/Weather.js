import { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  
  const [ isProcessed, setIsProcessed ] = useState(false);

  const [ data, setData ] = useState("");

  const backendURL = `http://localhost:9000/weather`;

  useEffect(() => {
    if(isProcessed == false) {
      axios.get(backendURL)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        console.log(err);
      });
      return setIsProcessed(true);
    }
  }, []);

  function convertKelvinToFahrenheit(kelvin) {
    return Math.round((1.8 * (kelvin - 273.15)) + 32);
  }


  console.log(data);

  if(data == "") {
    return (
      <main>
        <div className="box-shadow">
          <p>Awaiting API data...</p>
        </div>
      </main>
    );
  } else {
    return (

        <table className="Weather">
          <thead>
            <h3>{data.title}</h3>
            <tr>
              <th>City</th>
              <td>{data.weather_data.name}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Latitude</th>
              <td>{data.weather_data.coord.lat}</td>
            </tr>
            <tr>
              <th>Longitude</th>
              <td>{data.weather_data.coord.lon}</td>
            </tr>
            <tr>
              <th>Feels Like</th>
              <td>{convertKelvinToFahrenheit(data.weather_data.main.feels_like)} F</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{data.weather_data.main.humidity} %</td>
            </tr>
            <tr>
              <th>Barometric Pressure</th>
              <td>{data.weather_data.main.pressure} millibars</td>
            </tr>
            <tr>
              <th>Temperature Min-Max</th>
              <td>{convertKelvinToFahrenheit(data.weather_data.main.temp_min)} F - {convertKelvinToFahrenheit(data.weather_data.main.temp_max)} F</td>
            </tr>
            <tr>
              <th>Current Temperature</th>
              <td>{convertKelvinToFahrenheit(data.weather_data.main.temp)} F</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default Weather;