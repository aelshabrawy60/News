import React from 'react'

import './LastNews.css'
import NewsCard from '../../Components/NewsCard/NewsCard'

function LastNews({news}) {
  return (
    <div className='lastest-news-container'>
        <div className='section__header d-flex'>
            <div className='section__title'>Latest News</div>
            <div className='d-flex w-100 align-items-center gap-4'>
              <div className='section-header__dot'></div>
              <div className='section-header__liens'></div>
            </div>
        </div>
        <div className='d-flex flex-column gap-5'>
          {news?.slice(0,4).map((news)=> <div style={{height: '250px'}}><NewsCard img={news.urlToImage} info={{author: news.author, description : news.description ,title: news.title,link : news.url, date : news.publishedAt, catogery : 'sport'}} type={4}/></div>)}
        </div>
    </div>
  )
}

export default LastNews