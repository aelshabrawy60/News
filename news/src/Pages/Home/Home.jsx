import React, { useEffect, useState } from 'react'

import axios from 'axios';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { fetchData } from '../../news_fetcher';


function Home() {
  const [data, setData] = useState([]);


  useEffect(()=>{
    const fetchData_2 = async () => {
      try {
        const result = await fetchData('messi'); // Example API
        setData(result['articles'][1]);
      } catch (err) {
        
      } finally {
        
      }
    };
    fetchData_2()
    console.log(data)
  }, [])
  return (
    <div>
      <NewsCard img={data.urlToImage} info={{author: data.author,title: data.title,link : data.url, date : data.publishedAt, catogery : 'sport'}}/>
    </div>
  )
}

export default Home