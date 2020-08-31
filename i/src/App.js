import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Dk from './ClassRoutes/Dk.js';
import Dh from './ClassRoutes/Dh.js';
import Druid from './ClassRoutes/Druid.js';
import Hunter from './ClassRoutes/Hunter.js';
import Mage from './ClassRoutes/Mage.js';
import Monk from './ClassRoutes/Monk.js';
import Paladin from './ClassRoutes/Paladin.js';
import Priest from './ClassRoutes/Priest.js';
import Rogue from './ClassRoutes/Rogue.js';
import Shaman from './ClassRoutes/Shaman.js';
import Warlock from './ClassRoutes/Warlock.js';
import Warrior from './ClassRoutes/Warrior.js';

import dk from './assests/death_knight.jpg';
import dh from './assests/demon_hunter.jpg';
import druid from './assests/druid.jpg';
import hunter from './assests/hunter.jpg';
import mage from './assests/mage.jpg';
import monk from './assests/monk.jpg';
import paladin from './assests/paladin.jpg';
import priest from './assests/priest.jpg';
import rogue from './assests/rogue.jpg';
import shaman from './assests/shaman.jpg';
import warlock from './assests/warlock.jpg';
import warrior from './assests/warrior.jpg';





function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/'>
      <h1> Covenant Ability Displayer</h1>
      </Link> 
      <Switch>
      <Route exact={true} path="/" component={Home}/>
      <Route exact={true} path="/Dk" component={Dk}></Route>
      <Route exact={true} path="/Dh" component={Dh}></Route>
      <Route exact={true} path="/Druid" component={Druid}></Route>
      <Route exact={true} path="/Hunter" component={Hunter}></Route>
      <Route exact={true} path="/Mage" component={Mage}></Route>
      <Route exact={true} path="/Monk" component={Monk}></Route>
      <Route exact={true} path="/Paladin" component={Paladin}></Route>
      <Route exact={true} path="/Priest" component={Priest}></Route>
      <Route exact={true} path="/Rogue" component={Rogue}></Route>
      <Route exact={true} path="/Shaman" component={Shaman}></Route>
      <Route exact={true} path="/Warlock" component={Warlock}></Route>
      <Route exact={true} path="/Warrior" component={Warrior}></Route>
      </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
  <div className='icons'>
    <Link to='/Dk'>
  <img src={dk}  alt="Death Knight"></img>
  </Link>
  <Link to='/Dh'>
  <img src={dh}  alt="Demon Hunter"></img>
  </Link>
  <Link to='/Druid'>
  <img src={druid}  alt="druid "></img>
  </Link>
  <Link to='/Hunter'>
  <img src={hunter}  alt="hunter "></img>
  </Link>
  <Link to='/Mage'>
  <img src={mage}  alt="mage "></img>
  </Link>
  <Link to='/Monk'>
  <img src={monk}  alt="monk "></img>
  </Link>
  </div>
    <div className='icons'>
    <Link to='/Paladin'>
  <img src={paladin}  alt="paladin "></img>
  </Link>
  <Link to='/Priest'>
  <img src={priest}  alt="priest "></img>
  </Link>
  <Link to='/Rogue'>
  <img src={rogue}  alt="rogue "></img>
  </Link>
  <Link to='/Shaman'>
  <img src={shaman}  alt="shaman "></img>
  </Link>
  <Link to='/Warlock'>
  <img src={warlock}  alt="warlock "></img>
  </Link>
  <Link to='/Warrior'>
  <img src={warrior}  alt="warrior "></img>
  </Link>
  </div>
  </div>
);

export default App;
