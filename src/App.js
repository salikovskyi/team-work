import './App.css';
import Header from './components/Header/Header';
import Directions from './components/Directions/Directions';
import Provide from'./components/Provide/Provide'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project';
import Advantages from './components/Advantages/Advantages';
import Discuss from './components/Discuss/Discuss';
import StagesWork from './components/StagesWork/StagesWork';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Directions/>
      <Provide/>
      <Project/>
      <Advantages/>
      <Discuss/>
      <StagesWork/>
    </div>
  );
}

export default App;
