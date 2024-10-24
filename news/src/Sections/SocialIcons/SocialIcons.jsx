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
        <div className='section__header mt-0 d-flex'>
            <div className='section__title section__title--small'>Stay Connected</div>
            <div className='d-flex w-100 align-items-center gap-2'>
              <div className='section-header__dot'></div>
              <div className='section-header__liens'></div>
            </div>
        </div>
        <div className='d-flex flex-column gap-2'>
            <SocialIcon icon={<FaFacebookF />} color={getComputedStyle(root).getPropertyValue('--blue').replace(/^['"]|['"]$/g, '')} num={3030}/>
            <SocialIcon icon={<FaXTwitter />} color={getComputedStyle(root).getPropertyValue('--sky_blue').replace(/^['"]|['"]$/g, '')} num={3030}/>
            <SocialIcon icon={<FaPinterestP />} color={getComputedStyle(root).getPropertyValue('--red').replace(/^['"]|['"]$/g, '')} num={3030}/>
            <SocialIcon icon={<FaDribbble />} color={getComputedStyle(root).getPropertyValue('--purple').replace(/^['"]|['"]$/g, '')} num={3030}/>
            <SocialIcon icon={<FaYoutube />} color={getComputedStyle(root).getPropertyValue('--light_red').replace(/^['"]|['"]$/g, '')} num={3030}/>
        </div>
        
    </div>
  )
}

export default SocialIcons