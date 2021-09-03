import { mount } from "enzyme";
import React from "react";
import { MemoryRouter, Route } from "react-router";
import SearchScreen from "../../../components/search/SearchScreen/SearchScreen";

describe("<SearchScreen />", () => {
  test("debe de mostrarse correctamente con valores por defecto", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h2").text().trim()).toEqual("All Heroes");
  });

  test("debe de mostrar batman en el input con el valor de query string", () => {
    let query = "batman";
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=" + query]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("input").prop("value")).toBe(query);
  });

  test("debe de mostrar un mensaje como titulo si no encuentra el heroe", () => {
    let query = "sdfasffd";
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search?q=" + query]}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find("h2").text().trim()).toEqual(
      `There are no heroes with "${query}"`
    );
  });

  test("debe llamar el push del history", () => {
    const history = {
      push: jest.fn(),
      replace: jest.fn(),
      location: {} as any,
      listen: jest.fn(),
      createHref: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history as any} />}
        />
      </MemoryRouter>
    );

    let value = "batman";
    wrapper
      .find("input")
      .simulate("change", { target: { name: "search", value } });

    const formSubmit: any = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(history.push).toHaveBeenCalledWith("?q=" + value);
  });
});
