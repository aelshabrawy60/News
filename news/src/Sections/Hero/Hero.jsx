import React, { useEffect, useState } from 'react'

import './Hero.css'
import NewsCard from '../../Components/NewsCard/NewsCard'

function Hero({news}) {


  return (
    <div className='hero_container p-0'>
        <div className='row m-0'>
            <div className='col-7'>
                <NewsCard img={news[0]?.urlToImage} info={{author: news[0]?.author, description : news[0]?.description ,title: news[0]?.title,link : news[0]?.url, date : news[0]?.publishedAt, catogery : 'sport'}} type={0}/>
            </div>
            <div className='col row gap-4'>
                <div className='col-12'>
                    <NewsCard img={news[1]?.urlToImage} info={{author: news[1]?.author, description : news[1]?.description ,title: news[1]?.title,link : news[1]?.url, date : news[1]?.publishedAt, catogery : 'sport'}} type={1}/>
                </div>
                <div className='col-12'>
                    <NewsCard img={news[2]?.urlToImage} info={{author: news[2]?.author, description : news[2]?.description ,title: news[2]?.title,link : news[2]?.url, date : news[2]?.publishedAt, catogery : 'sport'}} type={1}/>
                </div>
                <div className='col-12'>
                    <NewsCard img={news[3]?.urlToImage} info={{author: news[3]?.author, description : news[3]?.description ,title: news[3]?.title,link : news[3]?.url, date : news[3]?.publishedAt, catogery : 'sport'}} type={1}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero