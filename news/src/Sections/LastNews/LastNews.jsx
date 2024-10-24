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
          {news?.map((news)=> <div style={{height: 'fit-content'}}><NewsCard img={news.media} info={{author: news.author, description : news.excerpt?.length > 120 ? news.excerpt.slice(0,120) + '.....' : news.excerpt ,title: news.title,link : news.url, date : news.published_date, catogery : news.topic}} type={4}/></div>)}
        </div>
    </div>
  )
}

export default LastNews