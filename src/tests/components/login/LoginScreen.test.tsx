import { mount } from "enzyme";
import React from "react";
import { AuthContext, UserProvider } from "../../../auth/AuthContext";
import { Action, ReducerUser } from "../../../auth/authReducer";
import LoginScreen from "../../../components/login/LoginScreen/LoginScreen";

describe("<LoginScreen />", () => {
  const history = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {} as any,
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const contextValue: UserProvider = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={history as any} />
    </AuthContext.Provider>
  );
  test("it should mount", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegacion", () => {
    let name = "maximo";
    wrapper
      .find("input")
      .simulate("change", { target: { value: name, name: "username" } });
    const formSubmit: any = wrapper.find("form").prop("onSubmit");

    // simula evento de submit
    formSubmit({ preventDefault() {} });

    const action: ReducerUser = {
      type: Action.LOGIN,
      payload: { logged: true, name },
    };
    expect(contextValue.dispatch).toHaveBeenCalledWith(action);
    expect(history.replace).toHaveBeenCalledWith("/");
    // si existiera el lastPath
    localStorage.setItem("lastPath", "/dc");
    formSubmit({ preventDefault() {} });
    expect(history.replace).toHaveBeenCalledWith("/dc");
  });
});
