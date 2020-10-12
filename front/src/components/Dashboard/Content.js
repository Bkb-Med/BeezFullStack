import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import ApiariesTbl from "components/Contents/ApiariesTbl";
import MainDash from "components/Contents/MainDash";
import Indicators from "components/Contents/indicators"
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
   
    <div className="py-lg-7">
      <Switch>
        <Route exact path="/" render={(props) => <MainDash {...props} />} />
        <Route
          exact
          path="/apiaries"
          render={(props) => <ApiariesTbl {...props} />}
        />
        <Route
          exact
          path="/indicators"
          render={(props) => <Indicators {...props} />}
        />
        <Route exact path="/Pages" component={() => "Pages"} />
        <Route exact path="/faq" component={() => "FAQ"} />
        <Route exact path="/contact" component={() => "Contact"} />
        <Route exact path="/Home-1" component={() => "Home-1"} />
        <Route exact path="/Home-2" component={() => "Home-2"} />
        <Route exact path="/Home-3" component={() => "Home-3"} />
        <Route exact path="/page-1" component={() => "page-1"} />
        <Route exact path="/page-2" component={() => "sfff"} />
        <Route exact path="/page-3" component={() => "page-3"} />
        <Route exact path="/page-4" component={() => "page-4"} />
      </Switch>
    </div>
  </Container>
);
//  <Route exact path="/" component={() => "main"} />
export default Content;
