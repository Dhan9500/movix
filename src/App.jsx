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
  // const apiTesting = () => {
  //   fetchDataFromApi("/movie/popular").then((res) => {
  //     dispatch(getApiConfiguration(res));
  //     dispatch(getGenres(res));
  //   });
  // };

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
    // apiTesting();
    fetchConfig();
  }, []);

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Router />
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
