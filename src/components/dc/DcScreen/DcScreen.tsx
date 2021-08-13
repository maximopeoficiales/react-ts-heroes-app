import { TypeHeroe } from "../../../enums/TypeHeroe";
import HeroList from "../../heroes/HeroList/HeroList";
import Container from "../../utils/Container/Container";
import Title from "../../utils/Title/Title";

interface MyProps {}
const defaultProps: MyProps = {};
const DCScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="DcScreen" className="row justify-content-center">
      <Container>
        <Title title={"DC Comics"} />
        <HeroList publisher={TypeHeroe.DC} />
      </Container>
    </div>
  );
};

export default DCScreen;
