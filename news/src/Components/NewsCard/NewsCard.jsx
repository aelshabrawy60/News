import React from 'react'

function NewsCard({img, info = {title: '', description: '', author : '', link: '', date: '', catogery: 'sports'}}) {
  return (
    <a href={info.link} target='_blank'>
        <div className='news_card'>
            <div className='news-card__img-container'>
                <img src={img}></img>
            </div>
            <div className='news-card__details'>
                <div className='news-card__catogery'>
                    {info.catogery}
                </div>
                <div className='news-card__title'>
                    {info.title}
                </div>
                <div>
                    <div className='news-card__author'>
                        <span>by</span> {info.author}
                    </div>
                    <div className='news-card__date'>
                        {info.date}
                    </div>
                </div>
            </div>
        </div>
    </a>
  )
}

export default NewsCard