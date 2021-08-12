import { TypeHeroe } from "../../../enums/TypeHeroe";
import HeroList from "../../heroes/HeroList/HeroList";

interface MyProps {}
const defaultProps: MyProps = {};
const MarvelScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="MarvelScreen" className="">
      <h1>MarvelScreen component</h1>
      <div className="">
        <HeroList publisher={TypeHeroe.MARVEL} />
      </div>
    </div>
  );
};

export default MarvelScreen;
