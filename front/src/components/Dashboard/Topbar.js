import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <Navbar
      className="  navbar-topbar navbar-navtop shadow-md p-3 mb-2  rounded"
      expand="sm"
    >
      <h3 className="text-white my-1 lead">Dashboard</h3>

      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto  mr-5">
          <NavItem>
            <NavLink tag={Link} to={"/page-1"}>
              page 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-2"}>
              page 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              page 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              page 4
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
