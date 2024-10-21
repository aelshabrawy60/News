import React from 'react'

import './TopStories.css'
import NewsCard from '../../Components/NewsCard/NewsCard'

function TopStories({news}) {
  return (
    <div className='top-stories-container'>
        <div className='top-stories__header section__header'>
            <div className='section__title'>Top Stories</div>
            <div className='d-flex w-100 align-items-center gap-4'>
              <div className='section-header__dot'></div>
              <div className='section-header__liens'></div>
            </div>
        </div>
        <div className='top-stories__body row'>
            {news.map((item)=> <div className='col'><NewsCard img={item.urlToImage} info={{author: item.author, description : item.description ,title: item.title,link : item.url, date : item.publishedAt, catogery : 'sport'}} type={2}/></div>)}
        </div>
    </div>
  )
}

export default TopStories