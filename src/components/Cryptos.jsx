import { React, useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { Typography } from 'antd';
import axios from 'axios';
import { CaretDownOutlined, CaretUpOutlined, SearchOutlined } from '@ant-design/icons';
import CryptoDetails from './CryptoDetails';
const { Search } = Input;
const { Title } = Typography;

const Cryptos = () => {
  const [CoinsP, setCoinsP] = useState([]);
  const [Coins, setCoins] = useState([]);
  const [Text, setText] = useState("");


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h")
      .then((res) => {
        setCoinsP(res.data);
        setCoins(res.data);
      })
      .catch(error => console.log(error))

  }, [])


  useEffect(() => {

    if(Text==="")
    {
      setCoins(CoinsP);
    }
    else
    {
      const FilteredData = CoinsP.filter((coin) => coin.name.toLowerCase().includes(Text.toLowerCase()))
      setCoins(FilteredData);
    }
    
    


  }, [Text])




  return (
    <>
      <Title level={2} className="heading" style={{ textAlign: 'center' }}>Take a tour around the CryptoWorld</Title>
      <div className="search-crypto">
        <input type="text" placeholder='Search cryptos...' onChange={(event) => setText(event.target.value.replace(/\s+/g, ''))} />
      </div>


      <div style={{ marginTop: '20px' }}>
        <Row gutter={[16, 16]} className="crypto-card-container">
          {Coins.map((coin) => {
            const url1 = 'https://www.';
            const url2 = String(coin.id);
            const url3 = '.org/';
            const url = url1.concat(url2, url3);
            return (
              <Col xs={24} sm={12} lg={6} className="gutter-row crypto-card">
                <Link to={`/crypto/${coin.id}`}>
                  <Card key={coin.symbol} title={coin.name} extra={<a href={url} target='_blank'><img src={coin.image} className="crypto-image" /></a>} style={{ width: 240 }, { height: 240 }}>
                    <p>Price: {coin.current_price} &#8377;</p>
                    <p>Market Cap: {millify(Number(coin.market_cap))}</p>
                    <p>Price Change : {parseFloat(coin.price_change_24h).toFixed(2)} </p>
                    <p style={coin.price_change_percentage_24h < 0 ? { color: 'red', fontWeight: 'bold' } : { color: '#00c746', fontWeight: 'bold' }}>{parseFloat(coin.price_change_percentage_24h).toFixed(2)} % {coin.price_change_percentage_24h < 0 ? <CaretDownOutlined /> : <CaretUpOutlined />}</p>
                  </Card>
                </Link>
              </Col>
            );
          })}


        </Row>
      </div>

    </>
  )
}

export default Cryptos