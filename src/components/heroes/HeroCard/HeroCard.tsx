import { Link } from "react-router-dom";
import { Heroe } from "../../../interfaces/Heroe";

interface MyProps {
  heroe: Heroe;
}
const defaultProps = {};
const HeroCard = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {
    heroe: { alter_ego, characters, first_appearance, id, superhero },
  } = props;
  return (
    <div
      data-testid="HeroCard"
      className="flex my-2 bg-gray-100 rounded-lg shadow-lg column"
    >
      <img
        loading="lazy"
        src={`./assets/heroes/${id}.jpg`}
        alt={id}
        className="object-cover object-top w-1/2 h-auto rounded-lg rounded-b-none"
      />
      <div className="flex w-1/2 p-2 colum">
        {/* <div className="flex column"> */}
          <h4>{superhero}</h4>
          <p>{alter_ego}</p>
          {alter_ego !== characters && <p>{characters}</p>}

          <Link
            to={`./hero/${id}`}
            className="px-3 py-2 my-2 font-bold text-white duration-300 ease-in-out delay-75 transform bg-indigo-900 rounded-lg active:scale-75"
          >
            Ver mas ...
          </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroCard;
