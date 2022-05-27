import './App.css';
import SunriseSunset from './components/SunriseSunset';
import Weather from './components/Weather';
import pixelCat from './images/pixel_cat.png';

function App() {
  return (
    <div className="App">
      <div className="CatDialogue">
        <SunriseSunset />
        <Weather />
      </div>
      
      
      
      
      {/* <div >
        <img src={pixelCat} className="images" id="pixelCat" alt="pixel cat"/>
      </div> */}
      
    </div>
  );
}

export default App;
