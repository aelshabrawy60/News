import React, { useEffect, useState } from 'react'

import axios from 'axios';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { fetchData } from '../../news_fetcher2';
import {ClassifyNews} from '../../ClassifyNews'
import Hero from '../../Sections/Hero/Hero';
import TopStories from '../../Sections/TopStories/TopStories';
import WhatIsNew from '../../Sections/WhatIsNew/WhatIsNew';
import Catogery from '../../Sections/Catogery/Catogery';
import LastNews from '../../Sections/LastNews/LastNews';
import SocialIcons from '../../Sections/SocialIcons/SocialIcons';
import NewsLetter from '../../Sections/NewsLetter/NewsLetter';
import AdCard from '../../Sections/AdCard/AdCard';
import Prices from '../../Sections/Prices/Prices';


function Home({lang}) {
  const [data, setData] = useState([]);

  const removeDuplicates = () => {
    const uniqueData = Array.from(new Map(data.map(item => [item.title, item])).values());
    console.log(uniqueData)
    setData(uniqueData);
  };
  
  useEffect(()=>{
    const fetchData_2 = async () => {
      try {
        const result = await fetchData(lang); // Example API
        setData(result['articles']);
      } catch (err) {
        
      } finally {
        
      }
    };

    fetchData_2()
    removeDuplicates()
    setData([])
  }, [lang])

  return (
    <>
      <Prices/>
      <div className='container-xl pt-md-4 pt-2'>
        <div className='row row-gap-5 m-0'>
            <Hero news={data?.slice(0,6)}/>
            <TopStories news={data?.slice(6, 10)}/>  
            <div className='row m-0'>
              <div className='col-lg-9 col-12 p-0'>
                <WhatIsNew/>
                <Catogery catogery = {'sport'}/> 
              </div>
              <div className='d-none d-lg-block col-lg-3 ps-4'>
                <div className='right-bar d-flex flex-column gap-5'>
                  <SocialIcons/>
                  <NewsLetter/>
                  <AdCard img={'ad.jpg'}/>
                </div>
              </div>
            </div>   
            <LastNews news={data?.slice(11, 23)}/>
        </div>
      </div>
    </>
  )
}

export default Home