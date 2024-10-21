import React, { useEffect, useState } from 'react'

import axios from 'axios';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { fetchData } from '../../news_fetcher2';
import Hero from '../../Sections/Hero/Hero';
import TopStories from '../../Sections/TopStories/TopStories';
import WhatIsNew from '../../Sections/WhatIsNew/WhatIsNew';
import Catogery from '../../Sections/Catogery/Catogery';
import LastNews from '../../Sections/LastNews/LastNews';
import SocialIcons from '../../Sections/SocialIcons/SocialIcons';


function Home() {
  const [data, setData] = useState([]);


  useEffect(()=>{
    const fetchData_2 = async () => {
      try {
        const result = await fetchData(null); // Example API
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
          <div className='row m-0'>
            <div className='col-lg-9 col-12 p-0'>
              <WhatIsNew/>
              <Catogery catogery={'music'}/> 
              <LastNews news={data.slice(11, 16)}/>
            </div>
            <div className='col ps-4'>
              <SocialIcons/>
            </div>
          </div>   
      </div>
    </div>
  )
}

export default Home