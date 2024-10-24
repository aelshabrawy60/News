import React from 'react'

import './TopStories.css'
import NewsCard from '../../Components/NewsCard/NewsCard'
import { motion, useAnimation } from 'framer-motion';

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Wait 0.5s between each child animation
    },
  },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  hidden: { opacity: 0, y: 50 },
};

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
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true}}  variants={listVariants} className='top-stories__body row row-gap-4'>
            {news.map((item, i)=> <motion.div variants={itemVariants}  className='col'><NewsCard img={item.media} info={{author: item.author, description : item.description ,title: item.title,link : item.link, date : item.published_date, catogery : item.topic}} type={2}/></motion.div>)}
        </motion.div>
    </div>
  )
}

export default TopStories