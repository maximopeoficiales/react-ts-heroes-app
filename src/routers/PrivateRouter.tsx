import { Redirect, Route, RouteProps } from "react-router-dom";

interface MyProps extends Partial<RouteProps> {
  isAuthenticated: boolean;
  redirectTo: string;
  component: React.ComponentType<any>;
}

export const PrivateRouter = (props: MyProps) => {
  const { isAuthenticated, component: Component, redirectTo, ...rest } = props;

  //   guardo ruta que trata de acceder para futuro uso
  localStorage.setItem("lastPath", rest.location?.pathname ?? "");
  return (
    <Route
      {...rest}
      component={(props: JSX.IntrinsicAttributes) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo} />
        )
      }
    />
  );
};
