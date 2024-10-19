import React from 'react'

import './TopStories.css'
import NewsCard from '../../Components/NewsCard/NewsCard'

function TopStories({news}) {
  return (
    <div className='top-stories-container'>
        <div className='top-stories__header'>

        </div>
        <div className='top-stories__body row'>
            {news.map((item)=> <div className='col'><NewsCard img={item.urlToImage} info={{author: item.author, description : item.description ,title: item.title,link : item.url, date : item.publishedAt, catogery : 'sport'}} type={2}/></div>)}
        </div>
    </div>
  )
}

export default TopStories