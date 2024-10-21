import React from 'react'

import './SocialIcon.css'

function SocialIcon({icon, color, num}) {
  return (
    <div className='social-icon-container d-flex p-3' style={{backgroundColor: color}}>
        <div className='icon-container'>
            {icon}
        </div>
        <div className='d-flex align-items-center social__body ms-3 ps-3 justify-content-between w-100'>
            <div className='social__text'>
                Follwers
            </div>
            <div>
                {num}
            </div>
        </div>
    </div>
  )
}

export default SocialIcon