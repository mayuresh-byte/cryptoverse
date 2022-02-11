import {React, useEffect} from 'react'
import millify from 'millify';
import { Row, Col, Statistic, Typography } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';
const { Title } = Typography;
const Homepage = () => {
    
    var options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {safeSearch: 'Off', textFormat: 'Raw'},
        headers: {
          'x-bingapis-sdk': 'true',
          'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
          'x-rapidapi-key': '131e9d6f89mshda5f14e124b072cp136dd3jsnd8349e5b43c3'
        }
      };
      
      axios.request(options).then((response) => {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
    
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value="5" /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value="5" /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value="5" /></Col>
                <Col span={12}><Statistic title="Total Volume" value="5" /></Col>
                <Col span={12}><Statistic title="Total Markets" value="5" /></Col>
            </Row>
        </>
    )
}

export default Homepage