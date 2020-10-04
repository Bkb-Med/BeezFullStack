import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            inverse
            className="fixed-top navbar-main navbar-transparent py-sm-0"
            expand="sm"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="navbar-brand mr-sm-1" to="/" tag={Link}>
                <img alt="..." src={require("assets/img/brand/logo.png")} />
              </NavbarBrand>

              <Nav className="navbar-nav-hover " navbar>
                <NavItem>
                  <NavLink href="" style={{ paddingRight: 0 }}>
                    Overview
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="" style={{ paddingRight: 0 }}>
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="" style={{ paddingRight: 0 }}>
                    About us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="d-none d-sm-block ml-lg-4">
                  <Button color="secondary">
                    <span className="">
                      <i className="fa fa-sign-in mr-2 " />
                    </span>
                    <span className="nav-link-inner--text ml-1">Login</span>
                  </Button>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
