interface MyProps {}
const defaultProps: MyProps = {};
const MarvelScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="MarvelScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>MarvelScreen component</h1>
      </div>
    </div>
  );
};

export default MarvelScreen;
