import React from 'react'

import './Price.css'


const deafult_data = {
    first : 'USD',
    second : 'EUR',
    price : '1.3234'
}

function Price({data = deafult_data}) {
  return (
    <div className='price-container p-3'>
        <div className='price__currencies'>
            {data.first} / {data.second} 
        </div>
        <div className='price__body'>
            {data.price}
        </div>
    </div>
  )
}

export default Price