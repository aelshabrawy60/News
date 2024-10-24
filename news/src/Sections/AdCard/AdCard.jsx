import './AdCard.css'

import React from 'react'

function AdCard({img}) {
  return (
    <div className='ad_card_container'>
        <img src={img}></img>
    </div>
  )
}

export default AdCard