import React, {useState, useEffect} from 'react'

function Ethereum(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/ETH_PRICE').then(
        response => response.json()
      ).then(data => setInitialData(data))
    }, []);

    return (
        <div className="Ethereum">
            <h1>Ethereum!</h1>
            <h2>BUY: {initialData.BUY}</h2> 
            <h2>SELL: {initialData.SELL}</h2> 
        </div>
    );
}

export default Ethereum