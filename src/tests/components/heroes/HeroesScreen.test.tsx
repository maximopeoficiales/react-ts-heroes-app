import React from "react";
import HeroesScreen from "../../../components/heroes/HeroesScreen/HeroesScreen";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";

import reactRouterDom from "react-router-dom";

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
    // pruebas en UseHistory no he encontrado respuesta
    // const mockPush = jest.fn();
    // // console.log(wrapper.html());
    // wrapper.find("button").simulate("click");
    // expect(mockPush).toHaveBeenCalled();
  });
});
