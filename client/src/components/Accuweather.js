import axios from 'axios';
require('dotenv').config();

function Accuweather() {
  
  async function getWeather() {
    const url = `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${process.env.ACCUWEATHER_API_KEY}&q=34203`;
    try {
      const response = await axios.get(url);
      console.log(response);
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

export default Accuweather;