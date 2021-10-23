import React, {useState, useEffect} from 'react'
import BitcoinCSS from './Price.module.css'

function Bitcoin(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/BTC_PRICE').then(
        response => response.json()
      ).then(data => setInitialData(data))
    }, []);

    return (
      <div className={BitcoinCSS.background_btc}>
        <div className={BitcoinCSS.bitcoin}>
            <h1>Bitcoin!</h1>
            <h2>BUY: {initialData.BUY}</h2> 
            <h2>SELL: {initialData.SELL}</h2> 
        </div>
      </div>
    );
}

export default Bitcoin