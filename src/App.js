import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import useFavicon from "react-modify-favicon";
import { Outlet } from "react-router-dom";
const App = () => {

  useFavicon('https://i.ibb.co/749Yw5W/favicon-16x16.png');
  return (
    <>
    <Header/>
    <Outlet />
  
    </>
  );
};

export default App;