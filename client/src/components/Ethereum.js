import React, {useState, useEffect} from 'react'
import EthereumCSS from './Price.module.css'

function Ethereum(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/ETH_PRICE').then(
        response => response.json()
      ).then(data => setInitialData(data))
    }, []);

    return (
      <div className={EthereumCSS.background_eth}>
        <div className={EthereumCSS.ethereum}>
            <h1>Ethereum!</h1>
            <h2>BUY: {initialData.BUY}</h2> 
            <h2>SELL: {initialData.SELL}</h2> 
        </div>
      </div>
    );
}

export default Ethereum