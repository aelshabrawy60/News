import React, { useEffect, useState } from 'react'

import './Hero.css'
import NewsCard from '../../Components/NewsCard/NewsCard'

function Hero({news = [], type = 0}) {


  return (
    <div className='hero_container p-0'>
        <div className='row m-0 row-gap-5'>
            <div className='col-lg-7 col-12'>
                <NewsCard img={news[0]?.media} info={{author: news[0]?.author, description : news[0]?.description ,title: news[0]?.title,link : news[0]?.link, date : news[0]?.published_date, catogery : news[0]?.topic}} type={0}/>
            </div>
            <div className='col row gap-4'>
                <div className='col-12'>
                    <NewsCard img={news[1]?.media} info={{author: news[1]?.author, description : news[1]?.description ,title: news[1]?.title,link : news[1]?.link, date : news[1]?.published_date, catogery : news[1]?.topic}} type={type == 0 ? 1: 3}/>
                </div>
                <div className='col-12'>
                    <NewsCard img={news[2]?.media} info={{author: news[2]?.author, description : news[2]?.description ,title: news[2]?.title,link : news[2]?.link, date : news[2]?.published_date, catogery : news[2]?.topic}} type={type == 0 ? 1: 3}/>
                </div>
                <div className='col-12'>
                    <NewsCard img={news[3]?.media} info={{author: news[3]?.author, description : news[3]?.description ,title: news[3]?.title,link : news[3]?.link, date : news[3]?.published_date, catogery : news[3]?.topic}} type={type == 0 ? 1: 3}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero