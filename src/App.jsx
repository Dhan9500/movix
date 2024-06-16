import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch} from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  const dispatch = useDispatch();
  const fetchConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url={
        backdrop:res.images.secure_base_url+'original',
        poster:res.images.secure_base_url+'original',
        profile:res.images.secure_base_url+'original',
      }
      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchConfig();
    genresCall();
  }, []);

  const genresCall=async()=>{
    let promises=[];
    let endPoints=["tv","movie"];
    let allGenres={};
    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data=await Promise.all(promises);
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id]=item));
    })
    dispatch(getGenres(allGenres));
  }

  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
