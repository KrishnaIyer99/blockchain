//Component displays BUY/SELL recommendation for BTC

//import dependencies
import React, { useState, useEffect } from "react";
import BitcoinCSS from "./Price.module.css";
import { Link } from "react-router-dom";

const Bitcoin = () => {
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    fetch("/BTC_PRICE")
      .then(
        (response) => response.json() //Fetch response as JSON from backend
      )
      .then((data) => setInitialData(data));
  }, []);
  //render HTML
  return (
    <div className={BitcoinCSS.background_btc}>
      <div className={BitcoinCSS.bitcoin}>
        <h1>Bitcoin (BTC)</h1>
        <h4>(Refresh to update prices)</h4>
        <h2>BUY: {initialData.BUY}</h2>
        <h2>SELL: {initialData.SELL}</h2>
        <Link to="/BTC_RAW">
          <p>See all prices</p>
        </Link>
      </div>

      <div className={BitcoinCSS.body}>
        <h3>About Bitcoin</h3>
        <p>
          "Bitcoin is a decentralized digital currency, without a central bank
          or single administrator, that can be sent from user to user on the
          peer-to-peer bitcoin network without the need for intermediaries.
          Transactions are verified by network nodes through cryptography and
          recorded in a public distributed ledger called a blockchain. The
          cryptocurrency was invented in 2008 by an unknown person or group of
          people using the name Satoshi Nakamoto. The currency began use in 2009
          when its implementation was released as open-source software. Bitcoins
          are created as a reward for a process known as mining. They can be
          exchanged for other currencies, products, and services but the
          real-world value of the coins is extremely volatile. Research produced
          by the University of Cambridge estimated that in 2017, there were 2.9
          to 5.8 million unique users using a cryptocurrency wallet, most of
          them using bitcoin.
          <br></br>
          <br></br>
          Bitcoin has been criticized for its use in illegal transactions, the
          large amount of electricity (and thus carbon footprint) used by
          mining, price volatility, and thefts from exchanges. Some economists
          and commentators have characterized it as a speculative bubble at
          various times. Bitcoin has also been used as an investment, although
          several regulatory agencies have issued investor alerts about bitcoin.
          In September 2021, El Salvador officially adopted Bitcoin as legal
          tender, becoming the first and only nation in the world to do so.
          <br></br>
          <br></br>
          The word bitcoin was defined in a white paper published on 31 October
          2008. It is a compound of the words bit and coin. No uniform
          convention for bitcoin capitalization exists; some sources use
          Bitcoin, capitalized, to refer to the technology and network and
          bitcoin, lowercase, for the unit of account. The Wall Street Journal,
          The Chronicle of Higher Education, and the Oxford English Dictionary
          advocate the use of lowercase bitcoin in all cases."
          <br></br>
          <br></br>
          ~Wikipedia (circa 2021)
        </p>
      </div>
    </div>
  );
};

export default Bitcoin;
