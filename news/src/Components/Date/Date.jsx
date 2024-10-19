import React from 'react'

import { SlCalender } from "react-icons/sl";

import './Date.css'

function Date({date}) {
  return (
    <div className='date-container d-flex gap-2 align-items-center'>
        <div className='date__icon d-flex align-items-center'>
            <SlCalender />
        </div>
        <div className='date__data'>
            {date?.slice(0,10)}
        </div>
    </div>
  )
}

export default Date