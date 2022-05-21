import { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  
  const [ isProcessed, setIsProcessed ] = useState(false);

  const [ data, setData ] = useState("");

  const backendURL = `http://localhost:9000/weather`;

  // converting Kelvin temp to Fahrenheit temp: F =(K - 273.15)* 1.8000+ 32.00

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
  
      <div className="Weather">
        <h3>{data.title}</h3>
        <p>For lat: {data.weather_data.coord.lat} and lon: {data.weather_data.coord.lon}</p>
        <table>
          <tbody>
            <tr>
              <th>Feels Like</th>
              <td>{convertKelvinToFahrenheit(data.weather_data.main.feels_like)} F</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Weather;