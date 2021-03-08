import './App.css';
import Banner from './Banner.js';
import StartPage from './principal/StartPage';
import Pokedex from './body/Pokedex';

function App() {
  return (
    <div className="App">
      <Banner />
      <StartPage />
      <Pokedex />
    </div>
  );
}

export default App;
