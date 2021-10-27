import React, {useState, useEffect} from 'react'
import ReactHtmlParser from 'react-html-parser'
import CustomCSS from './Price.module.css'
import {Link} from 'react-router-dom';
function Dogecoin_raw(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/DOGE_ALL').then(
        response => response.text()
      ).then(data => setInitialData(data))
    }, []);

    return (
    <div className={CustomCSS.background_doge}>
        <div className={CustomCSS.raw_data}>
            <h1><u>All DOGE prices</u></h1>
            <table align="center">
            {ReactHtmlParser (initialData)}
            </table>
            <div className={CustomCSS.legend}>
              <br></br>
              <li><b>Exchange: </b>The name of the exchange</li>
              <li><b>Base Symbol: </b>The cryptocurrency (base currency) we are viewing the value for</li>
              <li><b>Quote Symbol: </b>The currency the exchange uses to quote the value of the base currency (ex. INR = Indian Rupee)</li>
              <li><b>$USD: </b>The quoted value of the base currency from the exchange converted to USD</li>
              <br></br>
            </div>
        </div>
        <Link to="/DOGE">
            <h3>Go back</h3>
        </Link>
    </div>
    );
}
export default Dogecoin_raw