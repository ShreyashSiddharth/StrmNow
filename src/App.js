import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFavicon from "react-modify-favicon";
import { Outlet } from "react-router-dom";
const App = () => {

  useFavicon('https://i.ibb.co/74n9HyP/Screenshot-36.png');
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  );
};

export default App;