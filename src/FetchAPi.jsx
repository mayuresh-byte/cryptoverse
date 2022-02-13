import { useState, useEffect } from "react";

const UseApiData = () => {
    const [Coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            const resp = await res.json();
            try {
                setCoins(resp);
            } catch (err) {
                console.log(err);
            }
        };

    }, [])
    return { Coins };
}

export default UseApiData;