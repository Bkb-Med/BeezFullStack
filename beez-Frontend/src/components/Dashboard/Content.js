import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import ApiariesTbl from "components/Contents/ApiariesTbl";
import MainDash from "components/Contents/MainDash";
import Indicators from "components/Contents/indicators";
import Agents from "components/Contents/AgentTBL";
import Maps from "components/Contents/Maps";
const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <div className="py-lg-7">
      <Switch>
        <Route
          exact
          path="/index"
          render={(props) => <MainDash {...props} />}
        />
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

        <Route exact path="/maps" render={(props) => <Maps {...props} />} />
        <Route exact path="/agents" render={(props) => <Agents {...props} />} />
      </Switch>
    </div>
  </Container>
);
//  <Route exact path="/" component={() => "main"} />
export default Content;
