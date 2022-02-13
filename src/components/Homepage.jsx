import { React, useEffect, useState } from 'react'
import millify from 'millify';
import { Row, Col, Statistic, Typography } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cryptos from './Cryptos';

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

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
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
                        <div className="col col-1">Job Id</div>
                        <div className="col col-2">Customer Name</div>
                        <div className="col col-3">Amount Due</div>
                        <div className="col col-4">Payment Status</div>
                    </li>


                    <li className="table-row">
                        <div className="col col-1" data-label="Job Id">42235</div>
                        <div className="col col-2" data-label="Customer Name">John Doe</div>
                        <div className="col col-3" data-label="Amount">$350</div>
                        <div className="col col-4" data-label="Payment Status">Pending</div>
                    </li>
                    
                </ul>
            </div>


            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest News</Title>
                <Title level={3} className="show-more"><Link to='/news'>Show More</Link></Title>
            </div>
        </>
    )
}

export default Homepage