import React from 'react'
import { MdClose } from "react-icons/md";
import { LuSearch } from "react-icons/lu";

import './SearchBox.css'

function SearchBox({open = false, setOpend}) {
  return (
    <div className={open == true ? 'search_box_container search_box_container_open' : 'search_box_container'}>
        <div style={{display : open? 'flex' : 'none'}} className='h-100 justify-content-center align-items-center p-4'>
            <button className='close_btn' onClick={() => setOpend(false)}>
                <MdClose />
            </button>
            <div className='search_field_container d-flex'>
                <input placeholder='Type any thing'></input>
                <button className='search_btn_2'>
                    <LuSearch />
                </button>
            </div>
        </div>
    </div>
  )
}

export default SearchBox