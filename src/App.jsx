import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginForm from "./pages/Login";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import FoodItemCard from "./components/FoodItemCard";
import Menu from "./pages/Menu";


const App = () => {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route exact path="/" element ={<MainContent/>}/>
          <Route exact path="/Login" element ={<LoginForm/>}/>
          <Route exact path="/menu" element ={<Menu/>}/>
        </Routes>
        <Footer/>
      </>
  );
};

export default App;
