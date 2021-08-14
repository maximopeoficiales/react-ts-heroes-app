import { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Action, User } from "../../../auth/authReducer";

// de esta manera extiendo de RouteComponentProps
interface MyProps extends RouteComponentProps<any> {}

const defaultProps = {};
const LoginScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { history } = props;

  const { dispatch } = useContext(AuthContext);

  const handlerClick = () => {
    // cuando haga login redireccionara a la ruta que quizo acceder
    const lastPath = localStorage.getItem("lastPath") || "/";
    const userLogin: User = { name: "maximo", logged: true };

    dispatch({ type: Action.LOGIN, payload: userLogin });
    history.replace(lastPath);
  };

  return (
    <div data-testid="LoginScreen" className="row justify-content-center">
      <div className="text-white col-md-10">
        <h1>LoginScreen component</h1>
        <button
          onClick={handlerClick}
          className="px-3 py-2 font-bold text-white duration-75 ease-out delay-75 transform scale-100 bg-green-600 rounded-full active:scale-75 active:bg-green-800 "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
