import queryString from "query-string";
import { useMemo } from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
import { heroes } from "../../../data/heroes";
import { useForm } from "../../../hooks/useForm";
import { getHeroSearch } from "../../../selectors/getHeroSearch";
import HeroCard from "../../heroes/HeroCard/HeroCard";

interface MyProps extends RouteComponentProps<any> {}
const defaultProps = {};
const SearchScreen = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const location = useLocation();
  const { q = "" }: any = queryString.parse(location.search);

  const { history } = props;

  const { formValues, handlerChange, resetForm } = useForm<{ search: string }>({
    search: q,
  });

  const { search } = formValues;
  const heroesFiltered = useMemo(() => getHeroSearch(q), [q]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  };

  return (
    <div data-testid="SearchScreen" className="row justify-content-center">
      <div className="col-md-10">
        <h1>SearchScreen component</h1>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <form onSubmit={handlerSubmit}>
              <div className="form-group">
                <label htmlFor="search">Busca un Heroe</label>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  id="search"
                  value={search}
                  autoComplete="off"
                  onChange={handlerChange}
                  placeholder="Ingresa una busqueda"
                />
                <button type="submit">Buscar</button>
              </div>
            </form>
          </div>
          <div className="">
            <h2>Results</h2>
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} heroe={hero} />
            ))}

            {/* falta agregar validacion de cuando no hay resultados y cuando no encuentra la busqueda */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
