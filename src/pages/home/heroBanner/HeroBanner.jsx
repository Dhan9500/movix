import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import usefetch from '../../../hooks/UseFetch';
const HeroBanner = () => {
  const [background,setBackground]=useState('');
  const [query,setQuery]=useState('');
  const navigate=useNavigate();
  const {data,loading}=usefetch("/movie/upcoming");

  useEffect(()=>{
    const bgImg=data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bgImg);
  },[data]);

  const searchQueryHandler=(event)=>{
    if(event.key==='Enter' && query.length>0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">Millions of Movies, TV Shows and people to discover. Explore Now</span>
          <div className="searchInput">
            <input type="text" placeholder='Search for a movie or tv show.....'
              onChange={(e)=>setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;
