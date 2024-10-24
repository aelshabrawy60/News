import { useEffect, useState } from 'react'
import { BrowserRouter, Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import News from './Pages/News/News';
import Navbar from './Sections/Navbar/Navbar';
import SearchBox from './Components/SearchBox/SearchBox';
import { FaOtter } from 'react-icons/fa';
import Footer from './Sections/Footer/Footer';

const langs = ['EN', 'AR']
const trending_tags = ['photography', 'love', 'art' , 'fashion', 'music', 'makeup', 'beauty' , 'nature', 'calisthenics']

function App() {
  const [lang, setLang_] = useState(0)

  useEffect(()=>{
    console.log(lang)
  },[lang])

  function change_lang(l){
    setLang_(l)
  }
  return (
    <>
      <BrowserRouter>
        <Navbar lang={lang} langs={langs} setLang={change_lang}/>
        <Routes>
          <Route path="/" element={<Home lang={langs[lang]}/>}></Route>
          <Route path="/news" element={<News/>}></Route>
        </Routes>
        <Footer tags={trending_tags}/>
      </BrowserRouter>
    </>
  )
}

export default App
