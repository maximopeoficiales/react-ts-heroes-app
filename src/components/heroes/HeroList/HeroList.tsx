import { useMemo } from "react";
import { TypeHeroe } from "../../../enums/TypeHeroe";
import { Heroe } from "../../../interfaces/Heroe";
import { getHeroByPublisher } from "../../../selectors/getHeroByPublisher";
import HeroCard from "../HeroCard/HeroCard";

interface MyProps {
  publisher: TypeHeroe;
}
const defaultProps = {};
const HeroList = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { publisher } = props;

  // const heroes: Heroe[] = getHeroByPublisher(publisher);
  // memoriza las resultados, solo se vuelve a ejecutar cuando el publisher cambia
  const heroes: Heroe[] = useMemo(
    () => getHeroByPublisher(publisher),
    [publisher]
  );

  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
      {heroes.map((heroe) => (
        <HeroCard key={heroe.id} heroe={heroe} />
      ))}
    </div>
  );
};

export default HeroList;
