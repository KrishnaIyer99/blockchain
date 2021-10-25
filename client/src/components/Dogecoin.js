import React, {useState, useEffect} from 'react'
import DogecoinCSS from './Price.module.css'

function Dogecoin(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/DOGE_PRICE').then(
        response => response.json()
      ).then(data => setInitialData(data))
    }, []);

    return (
      <div className={DogecoinCSS.background_doge}>
        <div className={DogecoinCSS.dogecoin}>
            <h1>Dogecoin (DOGE)</h1>
            <h4>(Refresh to update prices)</h4>
            <h2>BUY: {initialData.BUY}</h2> 
            <h2>SELL: {initialData.SELL}</h2> 
        </div>

        <div className={DogecoinCSS.body}>
          <h3>About Dogecoin</h3>
          <p>
          "Dogecoin is a cryptocurrency created by software engineers Billy Markus
          and Jackson Palmer, who decided to create a payment system as a "joke", 
          making fun of the wild speculation in cryptocurrencies at the time. 
          Despite its satirical nature, some consider it a legitimate investment 
          prospect. Dogecoin features the face of the Shiba Inu dog from the "Doge" 
          meme as its logo and namesake. It was introduced on December 6, 2013, and 
          quickly developed its own online community, reaching a market capitalization 
          of over $85 billion on May 5, 2021. It is the current shirt sponsor 
          (sleeve only) of Premier League club Watford. Dogecoin.com promotes the 
          currency as the "fun and friendly Internet currency", referencing its 
          origins as a "joke." Elon Musk frequently mentions or talks about Dogecoin 
          on his Twitter account, boosting its popularity significantly in recent years."
          <br></br>
          <br></br>
          ~Wikipedia (circa 2021)
          </p>
        </div>
      </div>


    );
}

export default Dogecoin