import React, { useEffect, useState } from 'react'

import axios from 'axios';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { fetchData } from '../../news_fetcher';
import Hero from '../../Sections/Hero/Hero';
import TopStories from '../../Sections/TopStories/TopStories';


function Home() {
  const [data, setData] = useState([]);


  useEffect(()=>{
    const fetchData_2 = async () => {
      try {
        const result = await fetchData('d'); // Example API
        setData(result['articles']);
      } catch (err) {
        
      } finally {
      }
    };
    fetchData_2()
    console.log(data)
  }, [])

  return (
    <div className='container-xl pt-5'>
      <div className='row row-gap-5 m-0'>
          <Hero news={data.slice(0,6)}/>
          <TopStories news={data.slice(6, 10)}/>      
      </div>
    </div>
  )
}

export default Home