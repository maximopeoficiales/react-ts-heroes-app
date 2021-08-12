interface MyProps {}
const defaultProps: MyProps = {};
const LoginScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="LoginScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>LoginScreen component</h1>
      </div>
    </div>
  );
};

export default LoginScreen;
