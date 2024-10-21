import React, { useEffect } from 'react'
import Date from '../Date/Date'

import './NewsCard.css'

function NewsCard({img, info = {title: '', description: '', author : '', link: '', date: '', catogery: 'sports'}, type = 0}) {
    if(type == 0){
        if(img?.length == 0 || img == null){
            img = 'null_img.jpg'
        }
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
                                by <span className='news-card__author-name'>{info.author?.slice(0, info.author.length > 15 ? 15 : info.author.length-1)}</span>
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
        if(img?.length == 0 || img == null){
            img = 'null_img.jpg'
        }
        return (
            <a href={info.link} target='_blank'> 
                <div className='news_card d-flex align-items-top gap-4'>
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
                                by <span className='news-card__author-name'>{info.author?.slice(0, info.author.length > 15 ? 15 : info.author.length -1)}</span>
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
        if(img?.length == 0 || img == null){
            img = 'null_img.jpg'
        }
        return (
            <a href={info.link} target='_blank'> 
                <div className='news_card align-items-top gap-4'>
                    <div className='news-card__img-container mb-3'>
                        <img src={img} style={{position: 'static', minWidth: '260px', height:'250px'}}></img>
                        <div className='fade_bottom d-none'></div>
                    </div>
                    <div className='news-card__details d-flex flex-column gap-2'>
                        <div className='news-card__catogery news-card__catogery--none mb-1'>
                            {info.catogery}
                        </div>
                        <div className='news-card__title news-card__title--small' style={{fontSize: '18px'}}>
                            {info.title}
                        </div>
                        <div className='d-flex flex-wrap gap-3 news-card__sub-details news-card__sub-details-small align-items-center mt-2'>
                            <div className='news-card__author'>
                                by <span className='news-card__author-name'>{info.author?.slice(0, info.author.length > 15 ? 15 : info.author.length -1)}</span>
                            </div>
                            <div className='news-card__date'>
                                <Date date={info.date}/>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        )
    }else if(type == 3){
        if(img?.length == 0 || img == null){
            img = 'null_img.jpg'
        }
        return (
            <a href={info.link} target='_blank'> 
                <div className='news_card d-flex justify-content-between align-items-top gap-4'>
                    <div className='news-card__details d-flex flex-column gap-2'>
                        <div className='news-card__catogery news-card__catogery--none mb-1'>
                            {info.catogery}
                        </div>
                        <div className='news-card__title news-card__title--small' style={{fontSize : '18px', fontWeight: '700'}}>
                            {info.title}
                        </div>
                        <div className='d-flex flex-wrap gap-3 news-card__sub-details news-card__sub-details-small align-items-center mt-2'>
                            <div className='news-card__date'>
                                <Date date={info.date}/>
                            </div>
                        </div>
                    </div>
                    <div className='news-card__img-container news-card__img-container_1' >
                        <img src={img} style={{width: '150px' , height : '120px'}}></img>
                        <div className='fade_bottom d-none'></div>
                    </div>
                </div>
            </a>
        )
    }else if(type == 4){
        if(img?.length == 0 || img == null){
            img = 'null_img.jpg'
        }
        return (
            <a href={info.link} target='_blank'> 
                <div className='news_card row m-0 align-items-top gap-4' style={{height: '100%'}}>
                    <div className='news-card__img-container col-4 news-card__img-container_1'>
                        <img src={img} style={{width: '100%', height: '100%'}}></img>
                        <div className='fade_bottom d-none'></div>
                    </div>
                    <div className='news-card__details col d-flex flex-column gap-3 justify-content-between'>
                        <div className='news-card__catogery mb-1'>
                            {info.catogery}
                        </div>
                        <div className='news-card__title news-card__title--small' style={{fontSize: '24px', fontWeight: 'bold'}}>
                            {info.title}
                        </div>
                        <div className='news-card__description'>
                            {info.description}
                        </div>
                        <div className='d-flex flex-wrap gap-3 news-card__sub-details news-card__sub-details-small align-items-center mt-2'>
                            <div className='news-card__author'>
                                by <span className='news-card__author-name'>{info.author?.slice(0, info.author.length > 15 ? 15 : info.author.length - 1)}</span>
                            </div>
                            <div className='news-card__date'>
                                <Date date={info.date}/>
                            </div>
                        </div>
                        <div>
                            <button className='news-card__btn'>Read More</button>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
  
}

export default NewsCard