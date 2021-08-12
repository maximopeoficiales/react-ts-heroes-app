import { heroes } from '../data/heroes';
import { Heroe } from '../interfaces/Heroe';
export const getHeroById = (id: string): Heroe | undefined => {

    return heroes.find((e: Heroe) => e.id === id);
}