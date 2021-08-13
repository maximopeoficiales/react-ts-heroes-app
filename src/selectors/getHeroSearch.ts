import { heroes } from '../data/heroes';
import { Heroe } from '../interfaces/Heroe';
export const getHeroSearch = (search: string): Heroe[] => {
    // if (search === "") return heroes;

    return heroes.filter((e: Heroe) => e.superhero.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || e.alter_ego.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
}