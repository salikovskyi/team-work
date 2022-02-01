import './App.css';
import Header from './components/Header/Header';
import Directions from './components/Directions/Directions';
import Provide from'./components/Provide/Provide'
import Hero from './components/Hero/Hero'
import Project from './components/Project/Project';
import Advantages from './components/Advantages/Advantages';
import Discuss from './components/Discuss/Discuss';
import Stages from './components/Stages/Stages';
import Present from './components/Present/Present';
import Make from './components/Make/Make';
import Questions from './components/Questions/Questions';
import Info from './components/Info/Info'

import { withSize } from 'react-sizeme';

function App({size: {width}}) {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Directions/>
      <Provide/>
      <Project/>
      <Advantages/>
      <Discuss/>
      <Stages/>
      <Present/>
      <Make/>
      <Questions/>
      <Info/>
    </div>
  );
}

export default withSize()(App) ;
