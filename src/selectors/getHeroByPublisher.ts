import { heroes } from '../data/heroes';
import { TypeHeroe } from '../enums/TypeHeroe';
import { Heroe } from '../interfaces/Heroe';
export const getHeroByPublisher = (publisher: TypeHeroe): Heroe[] => {

    const validPublisher = [TypeHeroe.DC, TypeHeroe.MARVEL];
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);

    }
    
    return heroes.filter((e: Heroe) => e.publisher === publisher);
}