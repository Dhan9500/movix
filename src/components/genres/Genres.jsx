import React from 'react'
import "./style.scss"
import { useSelector } from 'react-redux';
const Genres = ({ids}) => {
  const {genres}=useSelector((state)=>state.home);
  return (
    <div className='genres'>
    {
      ids?.map((i)=>{
        if(!genres[i]?.name) return;
        return(
          <div className="genre" key={i}>
            {genres[i]?.name}
          </div>
        )
      })
    }
    </div>
  )
}

export default Genres;
