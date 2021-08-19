import { mount, shallow } from "enzyme";
import React from "react";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Pruebas en <AppRouter/>", () => {
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h2").text()).toBe("Login");
  });

  test("debe de mostrar el componente marvel si esta autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: "MaximoProg",
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    // expect(wrapper).toMatchSnapshot();
    // console.log(wrapper.html());
    expect(wrapper.find("nav").exists()).toBeTruthy();
  });
});
