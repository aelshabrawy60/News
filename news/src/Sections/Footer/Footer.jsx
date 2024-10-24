import React from 'react'

import './Footer.css'
import SocialIcon from '../../Components/SocialIcon/SocialIcon'

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';


const catogries = ['tech', 'world', 'finance'
    ,
    'politics'
    , 
    'business'
    , 
    'economics'
    , 
    'beauty'
    , 
    'entertainment'
    , 
    'travel'
    , 
    'music'
    , 
    'food'
    , 
    'science'
    , 
    'gaming'
    , 
    'energy']
function Footer({tags}) {
    const location = useLocation();

  return (
    <div className='footer-container '>
        <div className='footer__top container-xl p-4 pb-5 mb-4 gap-5'>
            <div className='row m-0 gap-5'>
                <div className='footer__brand col'>
                    <div className='footer_logo'>
                        <img src='logo.png'></img>
                    </div>
                    <div className='footer__brand--breif my-4'>
                        <p>We are a dynamic news organization committed to delivering accurate, timely, and insightful reporting. Our mission is to inform, engage, and empower audiences through trusted journalism</p>
                    </div>
                    <div className='footer__social gap-2 d-flex'>
                        <SocialIcon icon={<FaFacebookF />} color={'blue'} num={3030} type={1}/>
                        <SocialIcon icon={<FaXTwitter />} color={'red'} num={3030} type={1}/>
                        <SocialIcon icon={<FaPinterestP />} color={'green'} num={3030} type={1}/>
                        <SocialIcon icon={<FaDribbble />} color={'blue'} num={3030} type={1}/>
                        <SocialIcon icon={<FaYoutube />} color={'blue'} num={3030} type={1}/>
                    </div>
                </div>
                <div className='footer__tags col'>
                    <div className='footer_title mb-4'>Tags</div>
                    <div className='d-flex gap-2 flex-wrap'>
                        {tags.map((tag)=> <Link onClick={()=>window.scrollTo(0, 0)} to={'news'} state={{keyword : tag}} className='tag'>{tag}</Link>)}
                    </div>
                </div>
                <div className='footer__catogries col'>
                    <div className='footer_title mb-4'>Catogries</div>
                    <div className='d-flex'>
                        <ul className='ps-3 d-flex column-gap-md-5 column-gap-4 row-gap-3 flex-column flex-wrap' style={{maxHeight: '300px'}}>
                            {catogries.map((cat)=> <li className='catogerry col-6'>{cat}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer__bottom d-flex justify-content-center p-4'>
            <div>© 2024. All Rights Reserved by BloomTrends</div>
        </div>
    </div>
  )
}

export default Footer