import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';
import { Col, Row, Typography, Select } from 'antd';

const { Title, Text } = Typography;

const ChartsCryp = () => {
    const [ChartDataPrice, setChartDataPrice] = useState([]);
    
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily')
            .then((res) => {
                setChartDataPrice(res.data.prices);
            })
    }, [])

    // for(var i = 0; i < ChartDataPrice.length; i++) {
    //     for(var j = 0; j < ChartDataPrice[i].length; j++) {
    //         temp[i] = ChartDataPrice[i][0];
    //     }
    // }

    // const Prices = {};
    // temp.map((val)=>{
    //     Prices['P'] = val;
    // })

    const Prices = [];
    for(let i = 0; i<ChartDataPrice.length; i++)
    {
        const obj = {P: ChartDataPrice[i][0]};
        Prices.push(obj);
    }
    console.log(Prices)

    return (
        <>
            <div className="chart" style={{marginTop:15}}>
                <Title level={2} style={{color:'White'}}>
                    Chart
                </Title>
                <ResponsiveContainer width='100%' aspect={3} >
                    <LineChart data={Prices} width={500} height={300} margin={{top:5 , right:30, left:100, bottom:5}}>
                        <XAxis />
                        <Line dataKey="P"/>
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default ChartsCryp

