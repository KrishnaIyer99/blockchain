import React, {useState, useEffect} from 'react'
import ReactHtmlParser from 'react-html-parser'
import CustomCSS from './Price.module.css'
import {Link} from 'react-router-dom';
function Bitcoin_raw(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/BTC_ALL').then(
        response => response.text()
      ).then(data => setInitialData(data))
    }, []);

    return (
    <div className={CustomCSS.background_btc}>
        <div className={CustomCSS.raw_data}>
            <h1>All BTC prices</h1>
            <table align="center">
            {ReactHtmlParser (initialData)}
            </table>
        </div>
        <Link to="/BTC">
            <p>Go back</p>
        </Link>
    </div>
    );
}
export default Bitcoin_raw