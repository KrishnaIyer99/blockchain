import React, {useState, useEffect} from 'react'
import ReactHtmlParser from 'react-html-parser'
import CustomCSS from './Price.module.css'
import {Link} from 'react-router-dom';
function Ethereum_raw(){

    const [initialData, setInitialData] = useState([{}])

    useEffect(()=>{
      fetch('/ETH_ALL').then(
        response => response.text()
      ).then(data => setInitialData(data))
    }, []);

    return (
    <div className={CustomCSS.background_eth}>
        <div className={CustomCSS.raw_data}>
            <h1>All ETH prices</h1>
            <table align="center">
            {ReactHtmlParser (initialData)}
            </table>
        </div>
        <Link to="/ETH">
            <p>Go back</p>
        </Link>
    </div>
    );
}
export default Ethereum_raw