import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Bitcoin from './components/Bitcoin';
import Ethreum from './components/Ethereum';
import Dogecoin from'./components/Dogecoin';
import CustomCSS from './components/Price.module.css';

function App() {

  return (
    <div className="App">
      <div className={CustomCSS.header}>
        <h1>Chainalysis Inc. - New Grad Assignment</h1>
        <h3>Author: Krishna B. Iyer</h3>
      </div>
      <Router>
        <Route path="/BTC" component={Bitcoin} />
        <Route path="/ETH" component={Ethreum} />
        <Route path="/DOGE" component={Dogecoin} />
        <div className={CustomCSS.footer}>
          <h2>View Other Currencies</h2>
          <li><Link to={"/BTC"}>Bitcoin (BTC)</Link></li>
          <li><Link to={"/ETH"}>Ethereum (ETH)</Link></li>
          <li><Link to={"/DOGE"}> Dogecoin (DOGE)</Link></li>
        </div>
      </Router>
    </div>
  );
}

export default App;
