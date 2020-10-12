import React, { useState } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SideBar from "components/Dashboard/SideBar";
import Content from "components/Dashboard/Content";
import MainNavbar from "components/Navbars/MainNavbar";

import Login from "components/home/Login";
import Overview from "components/home/Overview";
import CardsFooter from "components/Footers/CardsFooter";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components

// index page sections

const Index = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <BrowserRouter>
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <div>
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      </BrowserRouter>
    </>
  );
};
// <MainNavbar /> <Login /> <Overview />
// <CardsFooter />
/*  <BrowserRouter>
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      </BrowserRouter>*/

/* <BrowserRouter>
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <div>
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      </BrowserRouter>*/
export default Index;
