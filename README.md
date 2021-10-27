# blockchain - Chainalysis New Grad Assessment

## Description:

The following program is a website using a Flask backend (Python) and a ReactJS frontend. The APIs from which the data is retreived from come from https://coincap.io/. They provide real-time price quotes for multiple cryptocurrencies across various exchanges.

Using the data from the API. The website recommends a Buy/Sell price for any of the 3 cryptocurrencies: DOGE, BTC, ETH. It does by comparing the highest and lowest price quotes.

Additonally, users can view all the price quotes from the various exchanges by clicking the "See all prices" link.

## How to run:

In order to run this program your system must have the following programs installed: \
    - Python3 (along with the pip package manager) \
    - Git \
    - NodeJS (along with the yarn package manager)

1.  Start by cloning the repository:

    git clone https://github.com/KrishnaIyer99/blockchain.git

2.  Start backend service (start Flask server)

    cd server \
    pip install -r requirements.txt \
    flask run

3.  Start frontend service

    cd client \
    yarn install \
    yarn start

**WARNING**: In order for program to work make sure the backend server is running on port 5000 since that is the proxy defined in package.json. If port 5000 is unavailable for whatever reason the proxy must be updated to the correct port value.

## Documentation:
https://docs.coincap.io/ 