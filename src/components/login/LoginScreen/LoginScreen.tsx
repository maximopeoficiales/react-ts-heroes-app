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

  const { user, dispatch } = useContext(AuthContext);

  const handlerClick = () => {
    // history.push("marvel");
    const userLogin: User = { name: "maximo", logged: true };
    
    dispatch({ type: Action.LOGIN, payload: userLogin });
    history.replace("/");
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
