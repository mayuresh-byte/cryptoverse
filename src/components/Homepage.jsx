import { React, useEffect, useState } from 'react'
import millify from 'millify';
import { Row, Col, Statistic, Typography } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';

const { Title } = Typography;
const Homepage = () => {

    const [Coins, setCoins] = useState([]);
    const [Exchanges, setExchanges] = useState([]);
    const [Global, setGlobal] = useState("");

    const [Cryptocurrencies, setCryptocurrencies] = useState("");
    const [market_cap, setmarket_cap] = useState(0);
    const [volume, setvolume] = useState(0);
    const [markets, setmarkets] = useState(0);

    // useEffect(() => {
    //     fetchData();
    //     return {Coins};
    // }, [])

    // const fetchData = async () => {
    //     const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    //     const resp = await res.json();
    //     try {
    //         setCoins(resp);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };



    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/exchanges').then((res) => {
            setExchanges(res.data);
        }).catch(error => console.log(error));

        axios.get('https://api.coingecko.com/api/v3/global').then((res) => {
            setCryptocurrencies(res.data.data.active_cryptocurrencies);
            setmarket_cap(res.data.data.total_market_cap.btc);
            setvolume(res.data.data.total_volume.btc);
            setmarkets(res.data.data.markets);
            setGlobal(res.data);
        }).catch(error => console.log(error));

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
            .then((res) => {
                setCoins(res.data);
            })
            .catch(error => console.log(error))

    }, []);



    return (
        <>

            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>

                <Col span={12}><Statistic title="Total Cryptocurrencies" value={Cryptocurrencies} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={Number(Exchanges.length + 278)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(Number(market_cap * 985))} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(Number(volume * 985))} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={markets} /></Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptos in the World</Title>
                <Title level={3} className="show-more"><Link to='/cryptos'>Show More</Link></Title>
            </div>


            <div className="container">
                <ul className="responsive-table">
                    <li className="table-header">
                        <div className="col col-1">Name</div>
                        <div className="col col-2">Current Price</div>
                        <div className="col col-3">Movement</div>
                        <div className="col col-3">Trade option</div>
                    </li>

                {Coins.map((coin)=>{
                    if(coin.market_cap_rank <= 10)
                    {
                        return(
                            <li className="table-row">
                            <div className="col col-1 crypto-home" data-label="Rank">{<img src={coin.image} className="" />} {coin.name}</div>
                            <div className="col col-2" data-label="Current Price">INR {coin.current_price}</div>
                            <div className="col col-3" data-label="Movement" style={coin.price_change_percentage_24h < 0 ? {color:'red'}:{color:'green'}}>{parseFloat(coin.price_change_percentage_24h).toFixed(2)} % {coin.price_change_percentage_24h < 0 ?<CaretDownOutlined />:<CaretUpOutlined />} </div>
                            <div className="col col-4 " data-label="Rank"><button class="crypto-home-btn1" style={{borderRadius:'7px'}}>Buy</button> <button class="crypto-home-btn2" style={{borderRadius:'7px'}}>Sell</button></div>
                        </li>
                        );
                    }
                    
                })} 
                </ul>
            </div>
        </>
    )
}

export default Homepage