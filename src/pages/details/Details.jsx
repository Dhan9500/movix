import React from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommendation'
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const videoType=data?.results?.filter((item)=>item.type==='Teaser' || item.type==='Trailer');
  const { data:credits, loading:creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  return (
    <div>
      <DetailsBanner video={videoType?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}/>
      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details;
