import React, { useEffect, useState } from 'react'
import {useLocation } from 'react-router-dom';


import { fetchData } from '../../news_fetcher2_search';
import SocialIcon from '../../Components/SocialIcon/SocialIcon';
import SocialIcons from '../../Sections/SocialIcons/SocialIcons';
import NewsLetter from '../../Sections/NewsLetter/NewsLetter';
import AdCard from '../../Sections/AdCard/AdCard';
import NewsGrid from '../../Components/NewsGrid/NewsGrid';
import Loading from '../../Components/Loading/Loading';

function News() {

  const [data, setData] = useState([]);
  //const location = useLocation();
  //const keyword = location.state?.keyword || 'Default Value';
  const { state } = useLocation();
  const { keyword } = state || {};
  useEffect(()=>{
    const fetchData_2 = async () => {
      try {
        const result = await fetchData(keyword,'EN'); // Example API
        setData(result['articles']);
        
      } catch (err) {
        
      } finally {
      }
    };

    fetchData_2()
    console.log(data)
    setData([])
  }, [keyword])

  if(data.length == 0){
    return(
        <div style={{height: '70vh'}}>
            <Loading/>
        </div>
    )
  }

  return (
    <div className='container-xl pt-md-5 pt-2'>
      <div className='row row-gap-5 m-0'> 
          <div className='row m-0'>
            <div className='col-lg-9 col-12 p-0'>
              <NewsGrid news={data}/>
            </div>
            <div className='d-none d-lg-block col-lg-3 ps-4'>
              <div className='right-bar d-flex flex-column gap-5'>
                <SocialIcons/>
                <NewsLetter/>
                <AdCard img={'ad.jpg'}/>
              </div>
            </div>
          </div>   
      </div>
    </div>
  )
}

export default News