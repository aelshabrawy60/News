import React, { useEffect, useRef, useState } from 'react'
import { MdClose } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { Link} from 'react-router-dom';


import './SearchBox.css'

function SearchBox({open = false, setOpend}) {
     const [current_search, setCurrent_search] = useState('')
     const navigate = useNavigate();

     const input_ref = useRef(null);

     const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          // Navigate to Details route and pass props using state
          navigate('/news', { state: { keyword: current_search } })
          setOpend(false)
        }
      };

      useEffect(() => {

        open? input_ref.current.focus() : null
      }, [open])
  return (
    <div className={open == true ? 'search_box_container search_box_container_open' : 'search_box_container'}>
        <div style={{display : open? 'flex' : 'none'}} className='h-100 justify-content-center align-items-center p-4'>
            <button className='close_btn' onClick={() => setOpend(false)}>
                <MdClose />
            </button>
            <div className='search_field_container d-flex'>
                <input ref={input_ref} placeholder='Type any thing' onKeyDown={handleKeyDown} onChange={(e)=>setCurrent_search(e.target.value)}></input>
                
                <Link
                    to= '/news'
                    state={{keyword : current_search}}
                >
                    <button className='search_btn_2' onClick={() =>setOpend(false)}>
                    <LuSearch />
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchBox