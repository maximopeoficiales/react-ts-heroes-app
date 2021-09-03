import { useContext } from "react";
import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../auth/AuthContext";
import { Action, User } from "../../../auth/authReducer";
import Container from "../../utils/Container/Container";
import { History } from "history";

// de esta manera extiendo de RouteComponentProps
interface MyProps {
  history: History;
}

const defaultProps = {};
const LoginScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { history } = props;

  const { formValues, handlerChange } = useForm<{ username: string }>({
    username: "",
  });
  const { dispatch } = useContext(AuthContext);
  const { username } = formValues;
  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username.trim() === "") {
      return;
    }
    // cuando haga login redireccionara a la ruta que quizo acceder
    const lastPath = localStorage.getItem("lastPath") || "/";
    const userLogin: User = { name: username, logged: true };

    dispatch({ type: Action.LOGIN, payload: userLogin });
    history.replace(lastPath);
  };

  return (
    <div data-testid="LoginScreen" className="text-white">
      <Container>
        <h2 className="my-4 text-3xl font-bold text-center">Login</h2>
        <form method="post" onSubmit={handlerSubmit}>
          <div className="flex flex-col my-2 ">
            <label htmlFor="username" className="text-base font-bold">
              Insert to User
            </label>
            <input
              value={username}
              onChange={handlerChange}
              type="text"
              className="p-2 my-1 border-none rounded-lg outline-none bg-heroBlack text-heroWhite"
              name="username"
              autoComplete="off"
              id="username"
              placeholder="Example: user123"
            />
          </div>

          <button
            type="submit"
            // onClick={}
            className="w-full px-3 py-2 font-bold duration-75 ease-out delay-75 transform scale-100 bg-green-600 rounded-full active:scale-75 active:bg-green-800 "
          >
            Login
          </button>
        </form>
      </Container>
    </div>
  );
};

export default LoginScreen;
