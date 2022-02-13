import { React, useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { Typography } from 'antd';
import axios from 'axios';
const { Title } = Typography;

const Cryptos = () => {
  
  const [Coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((res) => {
        setCoins(res.data);
      })
      .catch(error => console.log(error))

  }, [])

  return (
    <>
      <Title level={2} className="heading" style={{ textAlign: 'center' }}>Take a tour around the CryptoWorld</Title>
      <div style={{ marginTop: '20px' }}>
        <Row gutter={[16, 16]} className="crypto-card-container">
          {Coins.map((coin) => {
            const url1 = 'https://www.';
            const url2 = String(coin.id);
            const url3 = '.org/';
            const url = url1.concat(url2,url3);
            return (
              <Col xs={24} sm={12} lg={6} className="gutter-row crypto-card">
                <a href={url} target='_blank'>
                  <Card key={coin.symbol} title={coin.name} extra={<a href="#"><img src={coin.image} className="crypto-image" /></a>} style={{ width: 230 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                  </Card>
                  </a>
              </Col>
            );
          })}


        </Row>
      </div>

    </>
  )
}

export default Cryptos