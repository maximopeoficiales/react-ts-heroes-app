import React from "react";
import { History, createMemoryHistory, createBrowserHistory } from "history";
import HeroesScreen from "../../components/heroes/HeroesScreen/HeroesScreen";
import { mount, shallow } from "enzyme";
import { MemoryRouter, Route, Router, useHistory } from "react-router-dom";
import ReactRouterDom from "react-router-dom";

describe("Pruebas en <HeroesScreen/>", () => {
  test("debe mostrar el componente redirect si no hay argumentos en el URL", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroesScreen />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBeTruthy();
  });
  test("debe de mostrar un hero si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
        <Route path="/hero/:heroeId" component={HeroesScreen} />
      </MemoryRouter>
    );
    // console.log(wrapper.html());
    expect(wrapper.find("h1").exists()).toBeTruthy();
  });

  test("debe de regresar a la pantalla anterior con Push", () => {

    // const wrapper = mount(
    //   <Router history={history}>
    //     <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
    //       <Route path="/hero/:heroeId" component={HeroesScreen} />
    //     </MemoryRouter>
    //   </Router>
    // );
    // console.log(wrapper.html());

    // wrapper.find("button").simulate("click");
    // expect(mockGoBack).toHaveBeenCalled();
  });
});
