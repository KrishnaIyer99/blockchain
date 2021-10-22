import React, {useState, useEffect} from 'react'

function Bitcoin(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/BTC_PRICE').then(
        response => response.json()
      ).then(data => setInitialData(data))
    }, []);

    return (
        <div className="Bitcoin">
            <h1>Bitcoin!</h1>
            <h2>BUY: {initialData.BUY}</h2> 
            <h2>SELL: {initialData.SELL}</h2> 
        </div>
    );
}

export default Bitcoin