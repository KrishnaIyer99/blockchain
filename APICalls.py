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
import pandas as pd
app = Flask(__name__)

def data_processing(coin_prices):
    coin_prices = coin_prices["data"]
    coin_prices_df = pd.DataFrame(coin_prices)
    
    coin_prices_df = coin_prices_df.astype({"priceUsd": float})
    return coin_prices_df

def get_btc_prices():
    try:
        btc_prices = requests.get("http://api.coincap.io/v2/assets/bitcoin/markets").json()
    except:
        return {
            "BUY": (-1, "Error fetching price, try refreshing"),
            "SELL": (-1, "Error fetching price, try refreshing")
        }

    btc_prices_df = data_processing(btc_prices)
    btc_prices_df = btc_prices_df.loc[btc_prices_df['baseSymbol'] == "BTC"]

    btc_max_price = btc_prices_df.loc[btc_prices_df['priceUsd'].idxmax()]
    btc_min_price = btc_prices_df.loc[btc_prices_df['priceUsd'].idxmin()]

    return {
        "BUY": (round(btc_min_price['priceUsd'], 2), btc_min_price['exchangeId']),
        "SELL": (round(btc_max_price['priceUsd'], 2), btc_max_price['exchangeId']),
    }

def get_eth_prices():
    try:
        eth_prices = requests.get("http://api.coincap.io/v2/assets/ethereum/markets").json()
    except:
        return {
            "BUY": (-1, "Error fetching price, try refreshing"),
            "SELL": (-1, "Error fetching price, try refreshing")
        }
    eth_prices_df = data_processing(eth_prices)
    eth_prices_df = eth_prices_df.loc[eth_prices_df["baseSymbol"] == "ETH"]

    eth_max_price = eth_prices_df.loc[eth_prices_df["priceUsd"].idxmax()]
    eth_min_price = eth_prices_df.loc[eth_prices_df["priceUsd"].idxmin()]

    return {
        "BUY": (round(eth_min_price['priceUsd'], 2), eth_min_price['exchangeId']),
        "SELL": (round(eth_max_price['priceUsd'], 2), eth_max_price['exchangeId']),
    }

def get_doge_prices():
    try:
        doge_prices = requests.get("http://api.coincap.io/v2/assets/dogecoin/markets").json()
    except:
        return {
            "BUY": (-1, "Error fetching price, try refreshing"),
            "SELL": (-1, "Error fetching price, try refreshing")
        }
    doge_prices_df = data_processing(doge_prices)
    doge_prices_df = doge_prices_df.loc[doge_prices_df['baseSymbol'] == "DOGE"]


    doge_max_price = doge_prices_df.loc[doge_prices_df['priceUsd'].idxmax()]
    doge_min_price = doge_prices_df.loc[doge_prices_df['priceUsd'].idxmin()]

    return {
        "BUY": (round(doge_min_price['priceUsd'], 4), doge_min_price['exchangeId']),
        "SELL": (round(doge_max_price['priceUsd'], 4), doge_max_price['exchangeId']),
    }

def display_as_string(price_data):
    if price_data[0] == -1:
        return "An error occurred when retrieveing price, try refreshing!"
    
    return "${} USD - {}".format(price_data[0], price_data[1])

@app.route("/")
def home():
    return "Hello World!"
 

@app.route("/test")
def test():
    return get_btc_prices().to_dict()

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

@app.route("/DOGE_PRICE")
def display_doge_data():
    prices = get_doge_prices()
    return {
        "BUY":display_as_string(prices["BUY"]),
        "SELL":display_as_string(prices["SELL"])
    }

@app.route("/BTC_ALL")
def display_btc_raw_data():
    btc_prices = requests.get("http://api.coincap.io/v2/assets/bitcoin/markets").json()
    btc_prices_df = data_processing(btc_prices)
    btc_prices_df = btc_prices_df.loc[btc_prices_df['baseSymbol'] == "BTC"]
    btc_prices_df = btc_prices_df.round({'priceUsd':2})
    btc_prices_df = btc_prices_df.sort_values(by=['priceUsd'])
    btc_prices_df.rename(columns=
                            {
                                'exchangeId': 'Exchange',
                                'baseSymbol': 'Base Symbol',
                                'quoteSymbol': 'Quote Symbol',
                                'priceUsd': '$USD'
                            }, inplace=True)
    return btc_prices_df.to_html(header="true", columns=['Exchange', 'Base Symbol', 'Quote Symbol', '$USD'], index=False)

@app.route("/ETH_ALL")
def display_eth_raw_data():
    eth_prices = requests.get("http://api.coincap.io/v2/assets/ethereum/markets").json()
    eth_prices_df = data_processing(eth_prices)
    eth_prices_df = eth_prices_df.loc[eth_prices_df['baseSymbol'] == "ETH"]
    eth_prices_df = eth_prices_df.round({'priceUsd':2})
    eth_prices_df = eth_prices_df.sort_values(by=['priceUsd'])
    eth_prices_df.rename(columns=
                            {
                                'exchangeId': 'Exchange',
                                'baseSymbol': 'Base Symbol',
                                'quoteSymbol': 'Quote Symbol',
                                'priceUsd': '$USD'
                            }, inplace=True)
    return eth_prices_df.to_html(header="true", columns=['Exchange', 'Base Symbol', 'Quote Symbol', '$USD'], index=False)

@app.route("/DOGE_ALL")
def display_doge_raw_data():
    doge_prices = requests.get("http://api.coincap.io/v2/assets/dogecoin/markets").json()
    doge_prices_df = data_processing(doge_prices)
    doge_prices_df = doge_prices_df.loc[doge_prices_df['baseSymbol'] == "DOGE"]
    doge_prices_df = doge_prices_df.round({'priceUsd':4})
    doge_prices_df = doge_prices_df.sort_values(by=['priceUsd'])
    doge_prices_df.rename(columns=
                            {
                                'exchangeId': 'Exchange',
                                'baseSymbol': 'Base Symbol',
                                'quoteSymbol': 'Quote Symbol',
                                'priceUsd': '$USD'
                            }, inplace=True)
    raw_html = doge_prices_df.to_html(header="true", columns=['Exchange', 'Base Symbol', 'Quote Symbol', '$USD'], index=False)
    raw_html = raw_html.replace('<tr>', '<tr align="left">')
    raw_html = raw_html.replace('<th>', '<th align="center">')
    return raw_html

