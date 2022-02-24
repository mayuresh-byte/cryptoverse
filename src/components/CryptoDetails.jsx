import { React, useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined , CaretDownOutlined, CaretUpOutlined} from '@ant-design/icons';
import axios from 'axios';

import ChartsCryp from './ChartsCryp';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {

  const { coinId } = useParams();
  const [requestedCoin, setrequestedCoin] = useState(coinId)
  // const [timeperiod, setTimeperiod] = useState('7d');
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinId}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
      .then((res) => {
        setrequestedCoin(res.data);
      })

  }, [])

  // console.log(requestedCoin);


  return (
    <>
      <div class="main-content">
        <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
          <div class="container-fluid">
          <Col className="coin-heading-container">
            <img src={requestedCoin[0].image} alt="" />
        <Title level={2} className="coin-name">
          {requestedCoin[0].name} ({requestedCoin[0].symbol})
        </Title>
        <p style={{color:'white'}}>{requestedCoin[0].name} live price in US Dollar (USD). View value statistics, market cap and supply.</p>
      </Col>
            
            <div class="header-body">
              <div class="row">
                <div class="col-xl-3 col-lg-6 pt-5">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body" style={{ height: 160 }}>
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Current Price</h5>
                          <span class="h2 font-weight-bold mb-0">$ {requestedCoin[0].current_price}</span>
                        </div>
                      </div>
                      <p class="mt-3 mb-0 text-muted text-sm"> 
                        <span class="text-danger mr-2"> {requestedCoin[0].price_change_percentage_24h < 0 ? <i class="fas fa-arrow-down"></i>: <i class="fa fa-arrow-up"></i>}  {parseFloat(requestedCoin[0].price_change_percentage_24h).toFixed(2)} %</span>
                        <span class="text-nowrap">24h</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 pt-5">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body" style={{ height: 160 }}>
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Market Cap</h5>
                          <span class="h2 font-weight-bold mb-0">{(Number(requestedCoin[0].market_cap))}</span>
                        </div>
                        
                      </div>
                      <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-danger mr-2"> {requestedCoin[0].market_cap_change_percentage_24h < 0 ? <i class="fas fa-arrow-down"></i>: <i class="fa fa-arrow-up"></i>}  {parseFloat(requestedCoin[0].market_cap_change_percentage_24h).toFixed(2)} %</span>
                        <span class="text-nowrap">24h</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 pt-5">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body" style={{ height: 160 }}>
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Total Volume</h5>
                          <span class="h2 font-weight-bold mb-0">{requestedCoin[0].total_volume}</span>
                        </div>
                        
                      </div>
                      <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-danger mr-2"> {requestedCoin[0].market_cap_change_percentage_24h < 0 ? <i class="fas fa-arrow-down"></i>: <i class="fa fa-arrow-up"></i>}  {parseFloat(requestedCoin[0].market_cap_change_percentage_24h).toFixed(2)} %</span>
                        <span class="text-nowrap">24h</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 pt-5">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body" style={{ height: 160 }}>
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">Total Supply</h5>
                          <span class="h2 font-weight-bold mb-0">{requestedCoin[0].total_supply}</span>
                        </div>
                        
                      </div>
                      <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-warning mr-2">{requestedCoin[0].total_supply}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style={{alignContent:'center'}, {alignItems:'center'}, {justifyContent:'center'}}>
                <div class="col-xl-3 col-lg-6 pt-5">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body" style={{ height: 160 }}>
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">All Time High</h5>
                          <span class="h2 font-weight-bold mb-0">$ {requestedCoin[0].ath}</span>
                        </div>
                        
                      </div>
                      <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-danger mr-2"> {requestedCoin[0].ath_change_percentage < 0 ? <i class="fas fa-arrow-down"></i>: <i class="fa fa-arrow-up"></i>}  {parseFloat(requestedCoin[0].ath_change_percentage).toFixed(2)} %</span>
                        <span class="text-nowrap">24h</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 pt-5">
                  <div class="card card-stats mb-4 mb-xl-0">
                    <div class="card-body" style={{ height: 160 }}>
                      <div class="row">
                        <div class="col">
                          <h5 class="card-title text-uppercase text-muted mb-0">All Time Low</h5>
                          <span class="h2 font-weight-bold mb-0">$ {requestedCoin[0].atl}</span>
                        </div>
                        
                      </div>
                      <p class="mt-3 mb-0 text-muted text-sm">
                        <span class="text-danger mr-2"> {requestedCoin[0].atl_change_percentage < 0 ? <i class="fas fa-arrow-down"></i>: <i class="fa fa-arrow-up"></i>}  {parseFloat(requestedCoin[0].atl_change_percentage).toFixed(2)} %</span>
                        <span class="text-nowrap">24h</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chart">
                <ChartsCryp/>
            </div>
               
          </div>
        </div>
      </div>
    </>
  )
}

export default CryptoDetails