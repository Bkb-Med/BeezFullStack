import React, { useState } from "react";



import { BrowserRouter } from "react-router-dom";

import SideBar from "components/Dashboard/SideBar";
import Content from "components/Dashboard/Content";



const Index = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  return (
    <>
      <BrowserRouter>
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
        </div>
      </BrowserRouter>
      
    </>
  );
};

export default Index;
