import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/home/Home";
import Details from "../pages/details/Details";
import Explore from "../pages/explore/Explore";
import SearchResult from "../pages/searchresult/SearchResult";
import PageNotFound from "../pages/404/PageNotFound";


export default function Router(){
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/error" element={<PageNotFound />} />  
      </Routes>
    </>
  );
};
