import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen/DcScreen";
import HeroScreen from "../components/heroes/HeroesScreen/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen/SearchScreen";
import Navbar from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 mx-2 mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
