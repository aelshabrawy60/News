import React, { useEffect, useState } from 'react'

import './WhatIsNew.css'
import Hero from '../Hero/Hero'
import { fetchData } from '../../news_fetcher2';

const catogries = ['travel', 'tech', 'world', 'finance']

function WhatIsNew() {
    const [data, setData] = useState([]);
    const [current , setCurrent] = useState(0)
    useEffect(()=>{
        const fetchData_2 = async () => {
          try {
            const result = await fetchData(catogries[current]); // Example API
            setData(result['articles']);
          } catch (err) {
            
          } finally {
          }
        };
        fetchData_2()
    }, [current])

  return (
    <div className='whatIsNew-container'>
        <div className='section__header d-flex flex-wrap flex-lg-nowrap'>
            <div className='section__title'>What’s New</div>
            <div className='d-flex w-100 align-items-center gap-4'>
              <div className='section-header__dot'></div>
              <div className='section-header__liens'></div>
            </div>
            <div className='btns_group d-flex'>
              {catogries.map((item, i)=> <button className={i == current ? 'group_btn btn_choosen' : 'group_btn'} onClick={() =>setCurrent(i)}>{item}</button>)}
            </div>
        </div>
        <Hero news={data?.slice(0,6)} type={2}/>
    </div>
  )
}

export default WhatIsNew