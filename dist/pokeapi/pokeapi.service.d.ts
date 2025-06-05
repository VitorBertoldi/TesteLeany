export declare class PokeapiService {
    getPokemonInfo(identifier: string | number): Promise<{
        name: string;
        types: string[];
        sprite: string;
    }>;
}
