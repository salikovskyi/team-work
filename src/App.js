import './App.css';
import Header from './components/Header/Header';
import Directions from './components/Directions/Directions';
import Provide from'./components/Provide/Provide'


function App() {
  return (
    <div className="App">
      <Header/>
      <Directions/>
      <Provide/>
    </div>
  );
}

export default App;
