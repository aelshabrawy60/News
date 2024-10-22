import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Navbar from './Sections/Navbar/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
