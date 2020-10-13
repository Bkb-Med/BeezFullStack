import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";


import MainNavbar from "components/Navbars/MainNavbar";

import Login from "components/home/Login";
import Overview from "components/home/Overview";
import CardsFooter from "components/Footers/CardsFooter";

const Index = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
   
    
  return (
    <>
      <MainNavbar /> <Login /> <Overview />
      <CardsFooter />
    </>
  );
};

export default Index;
