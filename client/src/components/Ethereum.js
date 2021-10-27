//Component displays BUY/SELL recommendation for ETH

//import dependencies
import React, { useState, useEffect } from "react";
import EthereumCSS from "./Price.module.css";
import { Link } from "react-router-dom";

const Ethereum = () => {
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    fetch("/ETH_PRICE")
      .then(
        (response) => response.json() //Fetch data from backend as JSON
      )
      .then((data) => setInitialData(data));
  }, []);
  //render HTML
  return (
    <div className={EthereumCSS.background_eth}>
      <div className={EthereumCSS.ethereum}>
        <h1>Ethereum (ETH)</h1>
        <h4>(Refresh to update prices)</h4>
        <h2>BUY: {initialData.BUY}</h2>
        <h2>SELL: {initialData.SELL}</h2>
        <Link to="/ETH_RAW">
          <p>See all prices</p>
        </Link>
      </div>
      <div className={EthereumCSS.body}>
        <h3>About Ethereum</h3>
        <p>
          "Ethereum is a decentralized, open-source blockchain with smart
          contract functionality. Ether (ETH or Ξ) is the native cryptocurrency
          of the platform. Amongst cryptocurrencies, Ether is second only to
          Bitcoin in market capitalization.
          <br></br>
          <br></br>
          Ethereum was conceived in 2013 by programmer Vitalik Buterin. In 2014,
          development work commenced and was crowdfunded, and the network went
          live on 30 July 2015. The platform allows anyone to deploy permanent
          and immutable decentralized applications onto it, with which users can
          interact. Decentralized finance (DeFi) applications provide a broad
          array of financial services without the need for typical financial
          intermediaries like brokerages, exchanges, or banks, such as allowing
          cryptocurrency users to borrow against their holdings or lend them out
          for interest. Ethereum also allows for the creation and exchange of
          NFTs, which are non-interchangeable tokens connected to digital works
          of art or other real-world items and sold as unique digital property.
          Additionally, many other cryptocurrencies operate as ERC-20 tokens on
          top of the Ethereum blockchain and have utilized the platform for
          initial coin offerings.
          <br></br>
          <br></br>
          Ethereum has started implementing a series of upgrades called Ethereum
          2.0, which includes a transition to proof of stake and aims to
          increase transaction throughput using sharding."
          <br></br>
          <br></br>
          ~Wikipedia (circa 2021)
        </p>
      </div>
    </div>
  );
};

export default Ethereum;
