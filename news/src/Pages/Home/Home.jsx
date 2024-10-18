import React, { useEffect, useState } from 'react'

import axios from 'axios';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { fetchData } from '../../news_fetcher';


function Home() {
  const [data, setData] = useState([]);


  useEffect(()=>{
    const fetchData_2 = async () => {
      try {
        //const result = await fetchData('messi'); // Example API
        //setData(result['articles'][10]);
      } catch (err) {
        
      } finally {
        
      }
    };
    fetchData_2()
    console.log(data)
  }, [])
  return (
    <div className='row m-0'>
      <div className='col-5 m-4'>
        <NewsCard img={data.urlToImage} info={{author: data.author,title: data.title,link : data.url, date : data.publishedAt, catogery : 'sport'}} type={0}/>
      </div>
    </div>
  )
}

export default Home