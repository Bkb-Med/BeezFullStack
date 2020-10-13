import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import store from './components/store/store'
import { Provider } from "react-redux";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/beez-app-system.scss?v1.1.0";

import Authen from "views/Index.js";
import MainDash from "components/Index.js"
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <MainDash {...props} />} />
        <Route exact path="/login" render={(props) => <Authen {...props} />} />
       
       <Redirect to='/login'/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
