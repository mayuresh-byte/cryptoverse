import { React, useState } from 'react'
import axios from 'axios';


const News = () => {

  const [News, setNews] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://mboum-finance.p.rapidapi.com/ne/news',
    headers: {
      'x-rapidapi-host': 'mboum-finance.p.rapidapi.com',
      'x-rapidapi-key': '131e9d6f89mshda5f14e124b072cp136dd3jsnd8349e5b43c3'
    }
  };
  
  axios.request(options).then(function (response) {
    setNews(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  return (
    <div>
      {News.map((elem) => {
        return (
          <div style={{marginTop:50}}>
          <div style={{ width: 100 }, { marginTop: 20 }, { border: 'grey 2px solid' }}>
            <div style={{ marginTop: 15 }, { padding: 15 }}>
              <h3>{elem.title}</h3>
              <small>(source: {elem.source})</small>
              <div>
                <a className='NewsA' style={{color:'black'}} href={elem.link} target='_blank'><button style={{float:'right'}}>Read More</button></a>
              </div>
              <p>{elem.pubDate.replace('T', '.    .')}</p>
              
            </div>

          </div>
          </div>
        );
      })}

    </div>
  )
}

export default News