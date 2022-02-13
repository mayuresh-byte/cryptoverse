import React from 'react'

const News = () => {

    const News = [
    
        {
          "id": "binance",
          "name": "Binance",
          "year_established": 2017,
          "country": "Cayman Islands",
          "description": "",
          "url": "https://www.binance.com/",
          "image": "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250",
          "has_trading_incentive": false,
          "trust_score": 10,
          "trust_score_rank": 1,
          "trade_volume_24h_btc": 377631.7600546914,
          "trade_volume_24h_btc_normalized": 377631.7600546914
        },
        {
          "id": "okex",
          "name": "OKX",
          "year_established": 2013,
          "country": "Belize",
          "description": "",
          "url": "https://www.okx.com",
          "image": "https://assets.coingecko.com/markets/images/96/small/WeChat_Image_20220117220452.png?1642428377",
          "has_trading_incentive": false,
          "trust_score": 10,
          "trust_score_rank": 2,
          "trade_volume_24h_btc": 112480.9280724048,
          "trade_volume_24h_btc_normalized": 112480.9280724048
        },
    ]

    console.log(News[1].name);

    return (
        <div>

        </div>
    )
}

export default News