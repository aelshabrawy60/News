import React from 'react'

import './SocialIcon.css'

function SocialIcon({icon, color, num, type = 0}) {

    function lightenColor(hex, percent) {
        let num = parseInt(hex.replace('#', ''), 16);
      
        let r = Math.min(255, (num >> 16) + (255 * percent) / 100);
        let g = Math.min(255, ((num >> 8) & 0x00FF) + (255 * percent) / 100);
        let b = Math.min(255, (num & 0x0000FF) + (255 * percent) / 100);
        return (
          '#' +
          ((1 << 24) | (r << 16) | (g << 8) | b)
            .toString(16)
            .slice(1)
            .toUpperCase()
        );
        
    }
      
    if(type == 0){
        return(
            <div className='social-icon-container p-3 d-flex align-items-center' style={{background: `linear-gradient(-90deg, ${lightenColor(color, 10)} 0%, ${color} 100%)`}}>
                <div className='icon-container'>
                    {icon}
                </div>
                <div className='align-items-center d-flex social__body ms-3 ps-3 justify-content-between w-100'>
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
  return (
    <div className='social-icon-container d-flex' style={type == 0 ? {backgroundColor: color} : {background: 'none'}}>
        <div className='icon-container'>
            {icon}
        </div>
        <div style={{display: type == 0 ? 'flex': 'none'}} className='align-items-center social__body ms-3 ps-3 justify-content-between w-100'>
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