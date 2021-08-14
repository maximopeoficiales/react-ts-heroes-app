import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../components/login/LoginScreen/LoginScreen";
import Navbar from "../components/ui/Navbar";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="">
        {/* <Navbar /> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <PublicRouter
            isAuthenticated={user?.logged ?? false}
            exact
            path="/login"
            component={LoginScreen}
            redirectTo="/"
          />
          <PrivateRouter
            isAuthenticated={user?.logged ?? false}
            path="/"
            component={DashboardRoutes}
            redirectTo={"/login"}
          />
        </Switch>
      </div>
    </Router>
  );
};
