#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Oct 17 21:47:27 2021

@author: krishna
"""

from flask import Flask
from flask import render_template
import requests
#import json
app = Flask(__name__)

def get_btc_prices():
    blockchain = requests.get("https://api.blockchain.com/v3/exchange/tickers/BTC-USD").json()
    coincap = requests.get("http://api.coincap.io/v2/assets/bitcoin").json()
    coincap = dict(coincap['data'])

    return {
        "https://www.blockchain.com/" : float(blockchain['last_trade_price']),
        "https://coincap.io/" : float(coincap['priceUsd'])
    }

def get_eth_prices():
    blockchain = requests.get("https://api.blockchain.com/v3/exchange/tickers/ETH-USD").json()
    coincap = requests.get("http://api.coincap.io/v2/assets/ethereum").json()
    coincap = dict(coincap['data'])

    return {
        "https://www.blockchain.com/" : float(blockchain['last_trade_price']),
        "https://coincap.io/" : float(coincap['priceUsd'])
    }

@app.route("/")
def home():
    return "Hello World!"

@app.route("/BTC_BUY")
def bitcoin():
    
    btc_prices = get_btc_prices()
    print(btc_prices)
    buy_price = round(min(list(btc_prices.values())), 2)

    if buy_price == btc_prices["https://coincap.io/"]:
        ge = "https://coincap.io/"
        be = "https://www.blockchain.com/"
    else:
        ge = "https://www.blockchain.com/"
        be = "https://coincap.io/"


    return render_template('BTC_BUY.html', title="BTC_BUY", data=str({ge : buy_price}), bad_e=be)

@app.route("/BTC_SELL")
def bitcoin2():
    
    btc_prices = get_btc_prices()
    print(btc_prices)
    sell_price = round(max(list(btc_prices.values())), 2)

    if sell_price == btc_prices["https://coincap.io/"]:
        ge = "https://coincap.io/"
        be = "https://www.blockchain.com/"
    else:
        ge = "https://www.blockchain.com/"
        be = "https://coincap.io/"

    return render_template('BTC_SELL.html', title="BTC_SELL", data=str({ge : sell_price}), bad_e=be)

@app.route("/ETH_BUY")
def ethereum():
    
    eth_prices = get_eth_prices()

    buy_price = round(min(list(eth_prices.values())), 2)

    if buy_price == eth_prices["https://coincap.io/"]:
        ge = "https://coincap.io/"
        be = "https://www.blockchain.com/"
    else:
        ge = "https://www.blockchain.com/"
        be = "https://coincap.io/"


    return render_template('ETH_BUY.html', title="ETH_BUY", data=str({ge : buy_price}), bad_e=be)



@app.route("/ETH_SELL")
def ethereum2():
    eth_prices = get_eth_prices()
    #print(btc_prices)
    sell_price = round(max(list(eth_prices.values())), 2)

    if sell_price == eth_prices["https://coincap.io/"]:
        ge = "https://coincap.io/"
        be = "https://www.blockchain.com/"
    else:
        ge = "https://www.blockchain.com/"
        be = "https://coincap.io/"

    return render_template('ETH_SELL.html', title="ETH_SELL", data=str({ge : sell_price}), bad_e=be)
