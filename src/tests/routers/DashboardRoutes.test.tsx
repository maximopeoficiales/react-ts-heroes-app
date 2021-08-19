import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Pruebas en <DashBoardRoutes/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "MaximoProg",
    },
  };

  test("debe mostrarse correctamente el componente", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").text()).toBe(contextValue.user.name);
  });
});
