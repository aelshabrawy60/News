import React from 'react'

import './SocialIcons.css'
import SocialIcon from '../../Components/SocialIcon/SocialIcon'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function SocialIcons() {
  return (
    <div className='social-icons-container'>
        <div className='section__header d-flex'>
            <div className='section__title section__title--small'>Stay Connected</div>
            <div className='d-flex w-100 align-items-center gap-2'>
              <div className='section-header__dot'></div>
              <div className='section-header__liens'></div>
            </div>
        </div>
        <div className='d-flex flex-column gap-2'>
            <SocialIcon icon={<FaFacebookF />} color={'blue'} num={3030}/>
            <SocialIcon icon={<FaXTwitter />} color={'red'} num={3030}/>
            <SocialIcon icon={<FaPinterestP />} color={'green'} num={3030}/>
            <SocialIcon icon={<FaDribbble />} color={'blue'} num={3030}/>
            <SocialIcon icon={<FaYoutube />} color={'blue'} num={3030}/>
        </div>
        
    </div>
  )
}

export default SocialIcons