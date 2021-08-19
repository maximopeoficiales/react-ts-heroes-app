import { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter, RouteProps } from "react-router-dom";
import { PrivateRouter } from "../../routers/PrivateRouter";

describe("Pruebas en PrivateRouter", () => {
  const props: Partial<RouteProps> = {
    location: {
      pathname: "/rutaCustom",
      hash: "",
      search: "",
      state: "",
    },
  };

  Storage.prototype.setItem = jest.fn();

  test("Debe mostrar el componente si esta autenticado y guardado localstorage", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={true}
          component={() => <span>HOla</span>}
          redirectTo="/"
          {...props}
        />
      </MemoryRouter>
    );
    // console.log(wrapper.html());
    expect(wrapper.find("span").exists()).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      props.location?.pathname
    );
  });

  test("debe bloquar el componente si no esta autenticado", () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRouter
          isAuthenticated={false}
          component={() => <span>HOla</span>}
          redirectTo="/"
          {...props}
        />
      </MemoryRouter>
    );
    // console.log(wrapper.html());
    expect(wrapper.find("span").exists()).toBeFalsy();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      props.location?.pathname
    );
  });
});
