import { useMemo } from "react";
import { Redirect, RouteComponentProps, useParams } from "react-router-dom";
import { getHeroById } from "../../../selectors/getHeroById";

interface MyProps extends RouteComponentProps<any> {}
const defaultProps = {};
const HeroScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { history } = props;

  const { heroeId }: any = useParams();
  // const hero = getHeroById(heroeId);
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  // evito error de undefined
  if (!hero) {
    // si es null redirecciona marvel
    return <Redirect to={"/"} />;
  }

  const { superhero, alter_ego, characters, first_appearance } = { ...hero };

  const handlerReturn = () => {
    // evita el error cuando esta en incognito
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  // falta realizar diseño
  return (
    <div data-testid="HeroesScreen" className="row justify-content-center">
      <div className="col-md-10">
        <button onClick={handlerReturn}>Return</button>

        <h1>{superhero}</h1>
      </div>
    </div>
  );
};

export default HeroScreen;
