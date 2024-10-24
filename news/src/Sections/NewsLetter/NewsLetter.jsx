import React from 'react'

import './NewsLetter.css'

function NewsLetter() {
  return (
    <div className='news-letter-container d-flex justify-content-center flex-column text-center'>
        <div className='news-letter__header'>
            <div className='news-letter__title'>
              Subscribe To our news letter
            </div>
            <div className='news-letter__header--dashed mt-3 d-flex flex-column align-items-center gap-2'>
              <div className='dash-long'>

              </div>
              <div className='dash-short'>

              </div>
            </div>
        </div>
        <div className='news-letter__text mt-3'>
          <p>No spam, notifications only about new products, updates.</p>
        </div>
        <div className='news-letter__form d-flex gap-3 flex-column mt-3'>
            <input type='email' placeholder='Email' className=' p-2 border-0 text-center rounded'></input>
            <button className='main_btn p-2 rounded'>Subscribe now</button>
        </div>
    </div>
  )
}

export default NewsLetter