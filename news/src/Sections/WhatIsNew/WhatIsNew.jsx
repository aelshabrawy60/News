import React, { useEffect, useState } from 'react';
import './WhatIsNew.css';
import Hero from '../Hero/Hero';
import { fetchData } from '../../news_fetcher';
import NewsCard from '../../Components/NewsCard/NewsCard';
import { motion, useAnimation } from 'framer-motion';

const categories = ['travel', 'tech', 'world', 'finance'];

function WhatIsNew() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);

  // Utility function to rename keys
  const renameKeys = (data, keyMap) => {
    return data.map(item =>
      Object.keys(item).reduce((acc, key) => {
        const newKey = keyMap[key] || key; // Use new key if available, otherwise use old key
        acc[newKey] = item[key];
        return acc;
      }, {})
    );
  };

  // Map of keys to rename
  const keyMap = {
    urlToImage: 'media',
    publishedAt: 'published_date',
    url: 'link',
    // Add more key mappings as needed
  };

  useEffect(() => {
    const fetchData_2 = async () => {
      try {
        const result = await fetchData(categories[current]); // Example API
        const renamedData = renameKeys(result, keyMap);
        setData(renamedData);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData_2();
  }, [current]);

  return (
    <div className='whatIsNew-container'>
      <div className='section__header d-flex '>
        <div className='section__title'>What’s New</div>
        <div className='d-flex w-100 align-items-center gap-4'>
          <div className='section-header__dot'></div>
          <div className='section-header__liens'></div>
        </div>
        <div className='btns_group d-none d-md-flex'>
          {categories.map((item, i) => (
            <button
              key={i}
              className={i === current ? 'group_btn btn_choosen' : 'group_btn'}
              onClick={() => setCurrent(i)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className='btns_dropdown d-block d-md-none'>
            <div class="dropdown fs-5">
                <button class="drobdown_btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {categories[current]}
                </button>
                <ul class="dropdown-menu fs-5 dropdown-menu-end mt-3">
                    {categories.map((lang, i)=> <li className='dowpdown-lang' onClick={()=> setCurrent(i)}><a class="dropdown-item">{lang}</a></li>)}
                </ul>
            </div>
        </div>
      </div>
      <div className='row m-0 row-gap-5 justify-content-between'>
          <motion.div initial={{opacity: 0, x:-150}} viewport={{ once: true}} whileInView={{opacity: 1, x:0}} transition={{duration: 0.8}} className='col-lg-7 col-12 pe-2 p-0'>
            <NewsCard img={data[0]?.media} info={{author: data[0]?.author, description : data[0]?.description ,title: data[0]?.title,link : data[0]?.link, date : data[0]?.published_date, catogery : data[0]?.topic}} small={1} type={0}/>
          </motion.div>
          <div className='col-12 col-lg-5 p-0 d-none d-md-flex row gap-4'>
                <div className='col-12 ps-0'>
                    <NewsCard img={data[1]?.media} info={{author: data[1]?.author, description : data[1]?.description ,title: data[1]?.title,link : data[1]?.link, date : data[1]?.published_date, catogery : data[1]?.topic}} type={3}/>
                </div>
                <div className='col-12 ps-0'>
                    <NewsCard img={data[2]?.media} info={{author: data[2]?.author, description : data[2]?.description ,title: data[2]?.title,link : data[2]?.link, date : data[2]?.published_date, catogery : data[2]?.topic}} type={3}/>
                </div>
                <div className='col-12 ps-0'>
                    <NewsCard img={data[3]?.media} info={{author: data[3]?.author, description : data[3]?.description ,title: data[3]?.title,link : data[3]?.link, date : data[3]?.published_date, catogery : data[3]?.topic}} type={3}/>
                </div>
                <div className='col-12 ps-0'>
                    <NewsCard img={data[4]?.media} info={{author: data[4]?.author, description : data[4]?.description ,title: data[4]?.title,link : data[4]?.link, date : data[4]?.published_date, catogery : data[4]?.topic}} type={3}/>
                </div>
          </div>
      </div>
    </div>
  );
}

export default WhatIsNew;
