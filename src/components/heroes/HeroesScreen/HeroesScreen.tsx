interface MyProps {}
const defaultProps: MyProps = {};
const HeroesScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="HeroesScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>HeroesScreen component</h1>
      </div>
    </div>
  );
};

export default HeroesScreen;
