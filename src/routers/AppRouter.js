import React from "react";
// import Header from "../components/Header";
// import HelpPage from "../components/HelpPage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/DashBoard";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createBrowserHistory();

// define router configuration for our app inside the JSX, create a tree like structure
const AppRoute = () => (
  <Router history={history}>
    <div>
      {/* <Header /> */}
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRoute;
