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
            <h1>All DOGE prices</h1>
            <table align="center">
            {ReactHtmlParser (initialData)}
            </table>
        </div>
        <Link to="/DOGE">
            <p>Go back</p>
        </Link>
    </div>
    );
}
export default Dogecoin_raw