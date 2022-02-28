import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';
import { Col, Row, Typography, Select } from 'antd';

const { Title, Text } = Typography;

const ChartsCryp = ( {coinn} ) => {
    
    const [Coin, setCoin] = useState([]);
    
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinn}`)
            .then((res) => {
                setCoin(res.data);
            })
    }, [])

   

    return (
        <>
            Chart Area
        </>
    )
}

export default ChartsCryp

