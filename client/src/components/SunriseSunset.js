import axios from 'axios';

function SunriseSunset() {
  
  async function getSunTimes() {
    const url = "https://api.sunrise-sunset.org/json?lat=27.498928&lng=-82.574821";
    try {
      const response = await axios.get(url);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getSunTimes();
  return (
    <div className="SunriseSunset">
      <p>Sunrise</p>
      <p>Sunset</p>
    </div>
  );
}

export default SunriseSunset;