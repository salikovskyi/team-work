import './App.css';
import Header from './components/Header/Header';
import Directions from './components/Directions/Directions';
import Provide from'./components/Provide/Provide'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Directions/>
      <Provide/>
    </div>
  );
}

export default App;
