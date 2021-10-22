import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Bitcoin from './components/Bitcoin';
import Ethreum from './components/Ethereum';

function App() {

  return (
    <div className="App">
      <Router>
        <li><Link to={"/BTC"}>BTC</Link></li>
        <li><Link to={"/ETH"}>ETH</Link></li>
        <Route path="/BTC" component={Bitcoin} />
        <Route path="/ETH" component={Ethreum} />
      </Router>
    </div>
  );
}

export default App;
