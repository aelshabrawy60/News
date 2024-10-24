import React from 'react'
import NewsCard from '../NewsCard/NewsCard'

function NewsGrid({news}) {
  return (
    <div className='news_grid_container'>
        <div className='row m-0 row-gap-4'>
            {news?.map((news)=> <div className='col-12 col-sm-6 col-md-4'><NewsCard img={news.media} info={{author: news.author, description : news.excerpt?.length > 120 ? news.excerpt.slice(0,120) + '.....' : news.excerpt ,title: news.title,link : news.link, date : news.published_date, catogery : news.topic}} type={2}/></div>)}
        </div>
    </div>
  )
}

export default NewsGrid