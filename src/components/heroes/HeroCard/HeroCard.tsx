import { Link } from "react-router-dom";
import { Heroe } from "../../../interfaces/Heroe";
import "./HeroCard.css";
interface MyProps {
  heroe: Heroe;
}
const defaultProps = {};
const HeroCard = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {
    heroe: { id, superhero },
  } = props;
  return (
    <Link
      to={`./hero/${id}`}
      data-testid="HeroCard"
      className="inline-flex flex-wrap overflow-hidden bg-gray-100 shadow-lg rounded-xl"
    >
      <img
        loading="lazy"
        src={`./assets/heroes/${id}.jpg`}
        alt={id}
        className="object-cover w-full rounded-b-none rounded-xl h-96 card-heroe-filter"
      />
      <div className="block w-full px-3 py-2 text-lg font-bold text-center text-white duration-300 ease-in-out delay-75 transform bg-black">
        {superhero}
      </div>
    </Link>
  );
};

export default HeroCard;
