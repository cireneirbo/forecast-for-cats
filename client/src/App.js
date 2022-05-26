import './App.css';
import SunriseSunset from './components/SunriseSunset';
import Weather from './components/Weather';
import pixelCat from './pixel_cat.PNG';

function App() {
  return (
    <div className="App">
      <img src={pixelCat} className="images" alt="pixel cat"/>
      <Weather />
      
      <SunriseSunset />
      
    </div>
  );
}

export default App;
