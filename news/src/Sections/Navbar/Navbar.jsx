import React, { useState } from 'react'
import { LuSearch } from "react-icons/lu";
import './Navbar.css'
import SearchBox from '../../Components/SearchBox/SearchBox';
import {Link} from 'react-router-dom'

function Navbar({lang, langs, setLang}) {
    const [search_open, setSearch_open] = useState(false)
  return (
    <>
        <div>
            <nav class="navbar navbar-expand-lg navbar_container p-4">
                <div class="container-xl">
                    <Link className="navbar-brand" to= '/'><img src='logo.png'></img></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav column-gap-5 row-gap-3 ms-auto me-auto mb-5 mt-5 mt-lg-0 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">News</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Sport</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Tech</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">politics</a>
                            </li>
                        </ul>
                        <div className='search_box d-flex justify-content-between justify-contetn-lg-center align-items-center'>
                            <button className='search_btn' onClick={() => setSearch_open(true)}>
                                <LuSearch />
                            </button>

                            <div className='lang_switch'>
                                <div class="dropdown">
                                    <button class="drobdown_btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {langs[lang]}
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end mt-3">
                                        {langs.map((lang, i)=> <li className='dowpdown-lang' onClick={()=> setLang(i)}><a class="dropdown-item">{lang}</a></li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <SearchBox open={search_open} setOpend={() =>setSearch_open()}/>
    </>
  )
}

export default Navbar