import { TypeHeroe } from "../../../enums/TypeHeroe";
import HeroList from "../../heroes/HeroList/HeroList";

interface MyProps {}
const defaultProps: MyProps = {};
const DcScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="DcScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>DcScreen component</h1>
        <HeroList publisher={TypeHeroe.DC} />
      </div>
    </div>
  );
};

export default DcScreen;
