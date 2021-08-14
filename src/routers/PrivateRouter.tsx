import { Redirect, Route, RouteProps } from "react-router-dom";

interface MyProps extends Partial<RouteProps> {
  isAuthenticated: boolean;
  redirectTo: string;
  component: React.ComponentType<any>;
}

export const PrivateRouter = (props: MyProps) => {
  const { isAuthenticated, component: Component, redirectTo, ...rest } = props;

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
