import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DCScreen from "../components/dc/DcScreen/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen/SearchScreen";
import Navbar from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <div className="">
      <Navbar />
      <div className="text-white bg-heroBlack bg-">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </div>
  );
};
