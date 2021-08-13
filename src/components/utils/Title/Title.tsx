interface MyProps {
  title: string;
}
const defaultProps = {};
const Title = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { title } = props;
  return (
    <div
      data-testid="Title"
      className="p-1 my-2 text-4xl font-bold text-center sm:text-left"
    >
      {title}
    </div>
  );
};

export default Title;
