import React from 'react'
import { LuSearch } from "react-icons/lu";
import './Navbar.css'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar_container p-4">
            <div class="container-xl">
                <a class="navbar-brand" href="#"><img src='logo.png'></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav gap-5 ms-auto me-auto mb-2 mb-lg-0">
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
                </div>
                <div className='search_box d-flex justify-content-end'>
                    <button className='search_btn'>
                        <LuSearch />
                    </button>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar