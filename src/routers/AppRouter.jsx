import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import Dashboard from "../page/Dashboard";
import Test from "../page/Test";
import Index from "../page/Index";
import Signup from "../page/Signup";
const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" component={Index} exact={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
