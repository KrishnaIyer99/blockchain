### Q1: Are there any sub-optimal choices (or short cuts taken due to limited time) in your implementation?

Yes, due to the time constraints some short cuts were necessary. Mainly in the frontend - since I had never used ReactJS prior to this, this was my first ever React application I have ever built. I believe the way I retrieve data from my backend and display on the webpage could be done more efficiently. Also, my error handling could've been done much better. Currently, the only error I handle is if the API fails and the backend is unable to fetch any data. 

### Q2: Is any part of it over-designed?

Yes, the basic premise of this assignment was to compare the price quotes of ETH and BTC between only TWO exchanges and give a buy/sell recommendation based on that. However, thanks to the coincap API, rather than getting price quotes for only 2 exchanges I was able to retrieve real-time price quotes for multiple different exchanges. So rather than only selecting 2 exchanges and comparing their prices I thought it would be better to get the absolute lowest/highest price quotes across all the exchanges. This also enabled me to add an additonal view to display price data across all the exchanges. In order to see the price data across all the exchanges just click the "See all prices" located below the BUY/SELL recommendation. Additonally, I also included a third cryptocurrency - DOGE, this is mostly for comedic effect.

### Q3: If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

The current solution uses a free version of the Coincap API which allows for 200 requests/min - this is obviously not enough as the limit would be exceeded after each user makes 2 requests. In order to scale up for 100 users/second I would definitely need to upgrade to a paid version of the API. Additonally, in order to avoid overloading the API I may have to look into buffer/wait times before loading each webpage - perhaps a priority queue of some sort to see which users requests should be completed first.

### Q4: What are some other enhancements you would have made, if you had more time to do this implementation?

    - Rather than hardcode for specific cryptocurrencies (DOGE, ETH, BTC) I would implement a search bar where the user can input the symbol of any cryptocurrency and this in turn will pull the relevant data from the coincap API, implementing this would require completely redoing the frontend \
    - Do a better job with the HTML/CSS (better aesthetics) \
    - Used spring boot/java in the backend (didn't have time to learn new backend framework since I was already trying to learn ReactJS) \
    - More error handling for the frontend logic