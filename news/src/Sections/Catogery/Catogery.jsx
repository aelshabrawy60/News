import React, { useEffect, useState } from 'react'

import './Catogery.css'
import { fetchData } from '../../news_fetcher2';
import NewsCard from '../../Components/NewsCard/NewsCard';

function Catogery({catogery}) {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData_2 = async () => {
          try {
            const result = await fetchData(catogery); // Example API
            setData(result['articles']);
          } catch (err) {
            
          } finally {
          }
        };
        fetchData_2()
      }, [])

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
            {data?.slice(0,4).map((news)=> <div className='col p-0' style={{height: '320px', minWidth: '300px'}}><NewsCard img={news.media} info={{author: news.author, description : news.description ,title: news.title,link : news.link, date : news.published_date, catogery : catogery}} type={0}/></div>)}
        </div>
      </div>
    )
}


export default Catogery