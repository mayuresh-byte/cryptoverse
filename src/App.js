import React from 'react';
import { Switch, Routes,  Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css'
import Navbar from './components/Navbar';
import CryptoDetails from './components/CryptoDetails';
import Homepage from './components/Homepage';
import Cryptos from './components/Cryptos';
import Exchanges from './components/Exchanges';
import News from './components/News';

function App() {
  return (
    <>
      <div className="app">

        <div className="navbar">
          <Navbar/>
        </div>

        <div className="main">
            <Layout>
                <div className="routes">
                  <Routes>
                      <Route exact path="/cryptos" element={ <Cryptos/> } />
                      <Route exact path="/exchanges" element={ <Exchanges/> } />
                      <Route exact path="/news" element={ <News/> } />
                      <Route exact path="/crypto/:coinId" element={ <CryptoDetails/> } />
                      <Route exact path="/" element={ <Homepage/> } />

                  </Routes>
                </div>
            </Layout>
        </div>

        <div className="footer">

        </div>

      </div>
    </>
  );
}

export default App;
