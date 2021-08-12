import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen/MarvelScreen";
import Navbar from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroesScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
