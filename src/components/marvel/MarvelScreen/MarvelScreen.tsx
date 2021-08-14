import { TypeHeroe } from "../../../enums/TypeHeroe";
import HeroList from "../../heroes/HeroList/HeroList";
import Container from "../../utils/Container/Container";
import Title from "../../utils/Title/Title";

interface MyProps {}
const defaultProps: MyProps = {};
const MarvelScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  // const {} = props;
  return (
    <div data-testid="MarvelScreen" className="">
      <Container>
        <Title title={"Marvel"}/>

        <HeroList publisher={TypeHeroe.MARVEL} />
      </Container>
    </div>
  );
};

export default MarvelScreen;
