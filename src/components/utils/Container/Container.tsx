interface MyProps extends React.Props<any> {}
const defaultProps = {};
const Container = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { children } = props;
  return (
    <div className="w-11/12 mx-auto my-8 lg:w-9/12">
      <div className="p-5 rounded-xl lg:p-14 bg-heroBlackSecondary">
        {children}
      </div>
    </div>
  );
};

export default Container;
