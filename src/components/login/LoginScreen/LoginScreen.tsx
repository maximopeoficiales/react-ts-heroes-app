import { RouteComponentProps } from "react-router-dom";

// de esta manera extiendo de RouteComponentProps
interface MyProps extends RouteComponentProps<any> {}

const defaultProps = {};
const LoginScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { history } = props;

  const handlerClick = () => {
    // history.push("marvel");
    history.replace("/");
  };

  return (
    <div data-testid="LoginScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>LoginScreen component</h1>
        <button onClick={handlerClick}>Ir a Marvel</button>
      </div>
    </div>
  );
};

export default LoginScreen;
