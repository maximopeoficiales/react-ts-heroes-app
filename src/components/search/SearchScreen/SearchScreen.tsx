import queryString from "query-string";
import { useMemo } from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { heroes } from "../../../data/heroes";
import { useForm } from "../../../hooks/useForm";
import { getHeroSearch } from "../../../selectors/getHeroSearch";
import HeroCard from "../../heroes/HeroCard/HeroCard";
import Container from "../../utils/Container/Container";

interface MyProps extends RouteComponentProps<any> {}
const defaultProps = {};
const SearchScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const location = useLocation();
  const { q = "" }: any = queryString.parse(location.search);

  const { history } = props;

  const { formValues, handlerChange } = useForm<{ search: string }>({
    search: q,
  });

  const { search } = formValues;
  const heroesFiltered = useMemo(() => getHeroSearch(q), [q]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };
  console.log(heroes.length);

  return (
    <div data-testid="SearchScreen" className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="text-white">
          <Container>
            <form onSubmit={handlerSubmit}>
              <div className="flex flex-col my-2">
                <label htmlFor="search" className="text-base font-bold">
                  Busca un Heroe
                </label>
                <input
                  type="text"
                  className="p-2 my-2 border-none rounded-lg outline-none bg-heroBlack text-heroWhite"
                  name="search"
                  id="search"
                  value={search}
                  autoComplete="off"
                  onChange={handlerChange}
                  placeholder="Ingresa una busqueda"
                />
                <button
                  type="submit"
                  className="w-full px-3 py-2 my-2 font-bold duration-75 ease-out delay-75 transform scale-100 bg-green-600 rounded-full active:scale-75 active:bg-green-800 "
                >
                  Buscar
                </button>
              </div>
            </form>
          </Container>
        </div>
        <div className="col-span-2 p-2 mx-4">
          {heroesFiltered.length !== 0 ? (
            <>
              <h2 className="my-4 text-4xl font-bold text-center">
                {q === "" ? `All Heroes` : `Results with ${q}`}
              </h2>
              <div className="grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                {heroesFiltered.map((hero) => (
                  <HeroCard key={hero.id} heroe={hero} />
                ))}
              </div>
            </>
          ) : (
            <h2 className="my-4 text-4xl font-bold text-center">
              There are no heroes with "{q}"
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchScreen;
