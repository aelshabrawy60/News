import React, { useEffect, useState } from 'react'

import './Catogery.css'
import { fetchData } from '../../news_fetcher';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { motion, useAnimation } from 'framer-motion';
import { tr } from 'framer-motion/client';

function Catogery({catogery}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData_2 = async () => {
      try {
        const result = await fetchData(catogery); // Example API
        setData(result);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData_2();
  }, []);
    return (
      <div className='Catogery_continaer'>
        <div className='section__header d-flex'>
            <div className='section__title'>{catogery}</div>
            <div className='d-flex w-100 align-items-center gap-4'>
              <div className='section-header__dot'></div>
              <div className='section-header__liens'></div>
            </div>
        </div>
        <div className='row m-0 gap-5'>
            {data?.slice(0,4).map((news)=> <motion.div initial={{opacity : 0, y: 120}} viewport={{once: true}} whileInView={{opacity : 1, y: 0}} transition={{duration: 0.8}} className='col p-0' style={{height: '320px', minWidth: '300px'}}><NewsCard img={news.urlToImage} info={{author: news.author, description : news.description ,title: news.title,link : news.url, date : news.publishedAt, catogery : catogery}} small={1} type={0}/></motion.div>)}
        </div>
      </div>
    )
}


export default Catogery