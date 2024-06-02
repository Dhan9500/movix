import { useEffect, useState } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res));
      dispatch(getGenres(res));
    });
  };

  useEffect(() => {
    apiTesting();
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
