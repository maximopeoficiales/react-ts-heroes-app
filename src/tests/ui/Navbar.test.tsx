import { mount } from "enzyme";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { Action } from "../../auth/authReducer";
import Navbar from "../../components/ui/Navbar";
import { History } from "history";

describe("Pruebas en <Navbar/>", () => {
  const historyMock: Partial<History> = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {} as any,
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "MaximoProg",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock as any}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe(
      contextValue.user.name
    );
  });

  test("debe de llamar el logout y usar el history", () => {
    wrapper.find("button").at(1).simulate("click");
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: Action.LOGOUT,
    });

    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
