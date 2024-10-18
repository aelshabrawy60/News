import React from 'react'
import Date from '../Date/Date'

import './NewsCard.css'

function NewsCard({img, info = {title: '', description: '', author : '', link: '', date: '', catogery: 'sports'}, type = 0}) {

    if(type == 0){
        return (
            <a href={info.link} target='_blank'> 
                <div className='news_card p-5 d-flex align-items-end'>
                    <div className='news-card__img-container'>
                        <img src={img}></img>
                        <div className='fade_bottom'></div>
                    </div>
                    <div className='news-card__details d-flex flex-column gap-3'>
                        <div className='news-card__catogery'>
                            {info.catogery}
                        </div>
                        <div className='news-card__title'>
                            {info.title}
                        </div>
                        <div className='d-flex gap-3 flex-wrap news-card__sub-details align-items-center mt-2'>
                            <div className='news-card__author'>
                                by <span className='news-card__author-name'>{info.author}</span>
                            </div>
                            <div className='news-card__date'>
                                <Date date={info.date}/>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }else if(type == 1){
        return (
            <a href={info.link} target='_blank'> 
                <div className='news_card p-5 d-flex align-items-top gap-4'>
                    <div className='news-card__img-container news-card__img-container_1'>
                        <img src={img}></img>
                        <div className='fade_bottom d-none'></div>
                    </div>
                    <div className='news-card__details d-flex flex-column gap-2'>
                        <div className='news-card__catogery mb-1'>
                            {info.catogery}
                        </div>
                        <div className='news-card__title news-card__title--small'>
                            {info.title}
                        </div>
                        <div className='d-flex flex-wrap gap-3 news-card__sub-details news-card__sub-details-small align-items-center mt-2'>
                            <div className='news-card__author'>
                                by <span className='news-card__author-name'>{info.author}</span>
                            </div>
                            <div className='news-card__date'>
                                <Date date={info.date}/>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }else if(type == 2){

    }else if(type == 3){

    }else if(type == 4){

    }
  
}

export default NewsCard