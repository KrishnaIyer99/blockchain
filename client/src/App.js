import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Bitcoin from './components/Bitcoin';
import Ethreum from './components/Ethereum';
import Dogecoin from'./components/Dogecoin';
import CustomCSS from './components/Price.module.css';
import Bitcoin_raw from './components/Bitcoin_raw';
import Ethereum_raw from './components/Ethereum_raw';
import Dogecoin_raw from './components/Dogecoin_raw';

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
        <Route path="/BTC_RAW" component={Bitcoin_raw}/>
        <Route path="/ETH_RAW" component={Ethereum_raw}/>
        <Route path="/DOGE_RAW" component={Dogecoin_raw}/>
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
