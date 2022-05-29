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
        <p className="dev-plug">Look at what else my <a href="https://linktr.ee/codeethicallywitheric" target="_blank">owner</a> does!</p>
      </div>
    </div>
  );
}

export default App;
