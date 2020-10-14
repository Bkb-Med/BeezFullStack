import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkedAlt,
  faUsers,
  faCloud,
  faBoxes,
  faQuestion,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav, NavbarBrand, DropdownItem } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./SubMenu.js";

const SideBar = ({ isOpen, toggle }) => (
  <div
    className={classNames("fixed-dashboard", "sidebar", { "is-open": isOpen })}
  >
    <div className="sidebar-header shadow-lg ">
      <NavbarBrand
        className="navbar-brand-dash py-md-4 ml-lg-6"
        to="/"
        tag={Link}
      >
        <img alt="..." src={require("assets/img/brand/logo.png")} />
      </NavbarBrand>
    </div>
    <div className="side-menu ">
      <Nav vertical className="list-unstyled pb-3">
        <h5 className="text-menusb">Menu Principal</h5>
        <DropdownItem divider />
        <br />
        <NavItem className="nav-item-dashboard rounded-pill">
          <NavLink tag={Link} to={"/"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faWarehouse} className="mr-2" />
            Tableau de bord
          </NavLink>
        </NavItem>
        <NavItem className="nav-item-dashboard rounded-pill">
          <NavLink tag={Link} to={"/apiaries"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faBoxes} className="mr-2" />
            Ruchers
          </NavLink>
        </NavItem>
        <NavItem className="nav-item-dashboard rounded-pill">
          <NavLink tag={Link} to={"/about"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            Endroits
          </NavLink>
        </NavItem>
        <NavItem className="nav-item-dashboard rounded-pill">
          <NavLink tag={Link} to={"/indicators"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faCloud} className="mr-2" />
            Capteur
          </NavLink>
        </NavItem>
        <NavItem className="nav-item-dashboard rounded-pill">
          <NavLink tag={Link} to={"/about"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faUsers} className="mr-2" />
            Agents
          </NavLink>
        </NavItem>
        <br />
        <DropdownItem divider />
        <NavItem className="nav-item-dashboard rounded-pill">
          <NavLink tag={Link} to={"/about"} style={{ color: "#fff" }}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            Paramètres 
          </NavLink>
        </NavItem>
        {/*<SubMenu title="Pages" icon={faCopy} items={submenus[1]} />*/}
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
