import { Trainer } from "../../trainer/entities/trainer.entity";
import { TeamPokemon } from "../../team-pokemon/entities/team-pokemon.entity";
export declare class Team {
    id: number;
    name: string;
    trainer: Trainer;
    pokemons: TeamPokemon[];
}
