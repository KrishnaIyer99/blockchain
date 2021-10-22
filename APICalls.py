#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Oct 17 21:47:27 2021

@author: krishna
"""

from flask import Flask
from flask import render_template
import requests
import json
app = Flask(__name__)

def get_btc_prices():
    resp = {}
    try:
        blockchain = requests.get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD").json()
        coincap = requests.get("http://api.coincap.io/v2/assets/bitcoin").json()
        coincap = dict(coincap['data'])

        blockchain_t = (round(float(blockchain['last_trade_price']), 2), "https://www.blockchain.com/")
        coincap_t = (round(float(coincap['priceUsd']), 2), "https://coincap.io/")
    except:
        return {
            "BUY":(-1, "https://www.blockchain.com/"),
            "SELL":(-1, "https://coincap.io/")
        }
        
    if blockchain_t[0] > coincap_t[0]:
        resp["BUY"] = coincap_t
        resp["SELL"] = blockchain_t
    else:
        resp["SELL"] = coincap_t
        resp["BUY"] = blockchain_t
    
    return resp


def get_eth_prices():
    resp ={}
    try:
        blockchain = requests.get("https://api.blockchain.com/v3/exchange/tickers/ETH-USD").json()
        coincap = requests.get("http://api.coincap.io/v2/assets/ethereum").json()
        coincap = dict(coincap['data'])

        blockchain_t = (round(float(blockchain['last_trade_price']), 2), "https://www.blockchain.com/")
        coincap_t = (round(float(coincap['priceUsd']), 2), "https://coincap.io/")
    except:
        return {
            "BUY":(-1, "https://www.blockchain.com/"),
            "SELL":(-1, "https://coincap.io/")
        }

    if blockchain_t[0] > coincap_t[0]:
        resp["BUY"] = coincap_t
        resp["SELL"] = blockchain_t
    else:
        resp["SELL"] = coincap_t
        resp["BUY"] = blockchain_t
    
    return resp

def display_as_string(price_data):
    if price_data[0] == -1:
        return "An error occurred when retrieveing price, try again later!"
    
    return "${} - {}".format(price_data[0], price_data[1])

@app.route("/")
def home():
    return "Hello World!"
 

@app.route("/test")
def test():
    btc = get_btc_prices()
    eth = get_eth_prices()

    return {
        "BTC":str(btc),
        "ETH":str(eth)
    }

@app.route("/BTC_PRICE")
def display_btc_data():
    prices = get_btc_prices()
    return {
        "BUY":display_as_string(prices["BUY"]),
        "SELL":display_as_string(prices["SELL"])
    }

@app.route("/ETH_PRICE")
def display_eth_data():
    prices = get_eth_prices()
    return {
        "BUY":display_as_string(prices["BUY"]),
        "SELL":display_as_string(prices["SELL"])
    }
