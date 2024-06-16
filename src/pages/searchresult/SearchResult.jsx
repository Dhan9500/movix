import React, {useState,useEffect} from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import {fetchDataFromApi} from '../../utils/api'
import ContentWrapper from "../../components/contentWrapper/ContentWrapper"
import noResults from '../../assets/no-results.png'
import Spinner from '../../components/spinner/Spinner'
import Carousel from '../../components/carousel/Carousel'
import MovieCard from '../../components/movieCard/MovieCard'
const SearchResult = () => {
  const [data,setData] =useState(null);
  const [loading,setLoading] =useState(false);
  const [pageNum,setPageNum] =useState(1);
  const {query} =useParams();
  const toUpperCaseQuery = query.charAt(0).toUpperCase()+ query.slice(1)
  const fetchInitialData =()=>{
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      setData(res);
      setPageNum((prev)=>prev+1);
      setLoading(false);
    })
  }
  const pushNewResults=(res)=>{

  }
  const fetchNextPageData = ()=>{
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=>{
      if(data?.results){
        setData({...data,page:res?.page,results:[...data?.results,...res?.results]});
      }
      else{
        setData(res?.results);
      }
      setPageNum((prev)=>prev+1);
    })
  }

  useEffect(()=>{
    fetchInitialData();
  },[query]);

  return (
    <div className='searchResultsPage'>
    {
      loading && <Spinner initial={true}/>
    }
    {
      !loading && (
        <ContentWrapper>
          {
            data?.results?.length>0 ?(
              <>
                <div className="pageTitle">
                  {`Search ${data?.total_results>1?"results":"result"} of ${toUpperCaseQuery}`}
                </div>
                <InfiniteScroll 
                className='content'
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum<=data?.total_pages}
                loader={<Spinner/>}
                >
                {
                  data?.results?.map((item,index)=>item.media_type!=='person'?<MovieCard key={index} data={item} fromSearch={true}/>:null)
                }
                </InfiniteScroll>
              </>
            ):<></>
          }
        </ContentWrapper>
      )
    }
    </div>
  )
}

export default SearchResult;
