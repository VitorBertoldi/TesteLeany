import { TeamPokemonService } from './team-pokemon.service';
import { CreateTeamPokemonDto } from './dto/create-team-pokemon.dto';
export declare class TeamPokemonController {
    private readonly service;
    constructor(service: TeamPokemonService);
    add(teamId: string, dto: CreateTeamPokemonDto): Promise<import("./entities/team-pokemon.entity").TeamPokemon>;
    remove(id: string): Promise<import("./entities/team-pokemon.entity").TeamPokemon>;
    list(teamId: string): Promise<{
        name: string;
        types: string[];
        sprite: string;
        id: number;
        pokemonIdentifier: string;
    }[]>;
}
