import { useState, useEffect } from 'react';
import axios from 'axios';

function SunriseSunset() {
  
  const [ isProcessed, setIsProcessed ] = useState(false);

  const [ data, setData ] = useState("");

  const url = `https://api.sunrise-sunset.org/json?lat=27.498928&lng=-82.574821`;

  useEffect(() => {
    if(isProcessed == false) {
      axios.get(url)
      .then(res => {
        setData(res.data.results);
      }).catch(err => {
        console.log(err);
      });
      return setIsProcessed(true);
    }
  }, []);

  // async function getSunTimes() {
  //   const url = "https://api.sunrise-sunset.org/json?lat=27.498928&lng=-82.574821";
  //   try {
  //     const response = await axios.get(url);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // getSunTimes();

  console.log(data);

  if(data == "") {
    return (
      <main>
        <div className="box-shadow">
          <p>Awaiting Sunrise and Sunset API data...</p>
        </div>
      </main>
    );
  } else {
    return (
      <div className="SunriseSunset">
        <table>
          <tbody>
            <tr>
              <th>Astronomical Twilight Begin</th>
              <td>{data.astronomical_twilight_begin}</td>
            </tr>
            <tr>
              <th>Astronomical Twilight End</th>
              <td>{data.astronomical_twilight_end}</td>
            </tr>
            <tr>
              <th>Civil Twilight Begin</th>
              <td>{data.civil_twilight_begin}</td>
            </tr>
            <tr>
              <th>Civil Twilight End</th>
              <td>{data.civil_twilight_end}</td>
            </tr>
            <tr>
              <th>Day Length</th>
              <td>{data.day_length}</td>
            </tr>
            <tr>
              <th>Nautical Twilight Begin</th>
              <td>{data.nautical_twilight_begin}</td>
            </tr>
            <tr>
              <th>Nautical Twilight End</th>
              <td>{data.nautical_twilight_end}</td>
            </tr>
            <tr>
              <th>Solar Noon</th>
              <td>{data.solar_noon}</td>
            </tr>
            <tr>
              <th>Sunrise</th>
              <td>{data.sunrise}</td>
            </tr>
            <tr>
              <th>Sunset</th>
              <td>{data.sunset}</td>
            </tr>
          </tbody>
        </table>











      </div>
    );
  }
}

export default SunriseSunset;