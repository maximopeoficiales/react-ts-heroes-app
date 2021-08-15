import { useMemo } from "react";
import { Redirect, RouteComponentProps, useParams } from "react-router-dom";
import { getHeroById } from "../../../selectors/getHeroById";
import Container from "../../utils/Container/Container";
import HeroCard from "../HeroCard/HeroCard";

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

  const { superhero, alter_ego, characters, first_appearance, publisher } =
    hero;

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
    <Container>
      {/* <pre>{JSON.stringify(hero, null, 2)}</pre> */}
      <button
        onClick={handlerReturn}
        className="px-3 py-2 my-4 font-bold duration-75 ease-out delay-75 transform scale-100 rounded-full bg-heroPrimary-dark active:scale-75 active:bg-blue-600"
      >
        Return
      </button>
      <div data-testid="HeroesScreen" className="">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col items-center justify-center w-full sm:w-6/12">
            <HeroCard heroe={hero} />
          </div>
          <div className="w-full p-4 sm:w-6/12">
            <h1 className="my-1 text-xl font-bold text-center">Information</h1>
            <p>
              <b>
                SuperHero: <span className="font-normal">{superhero}</span>
              </b>
            </p>
            <p>
              <b>
                Name: <span className="font-normal">{alter_ego}</span>
              </b>
            </p>
            <p>
              <b>
                Publisher: <span className="font-normal">{publisher}</span>
              </b>
            </p>
            <p>
              <b>
                First Appearance:{" "}
                <span className="font-normal">{first_appearance}</span>
              </b>
            </p>
            {characters !== alter_ego && (
              <p>
                <b>
                  Characters: <span className="font-normal">{characters}</span>
                </b>
              </p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroScreen;
