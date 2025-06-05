import { Repository } from 'typeorm';
import { TeamPokemon } from './entities/team-pokemon.entity';
import { Team } from '../team/entities/team.entity';
import { CreateTeamPokemonDto } from './dto/create-team-pokemon.dto';
import { PokeapiService } from '../pokeapi/pokeapi.service';
export declare class TeamPokemonService {
    private teamPokemonRepository;
    private teamRepository;
    private pokeapiService;
    constructor(teamPokemonRepository: Repository<TeamPokemon>, teamRepository: Repository<Team>, pokeapiService: PokeapiService);
    addPokemon(teamId: number, dto: CreateTeamPokemonDto): Promise<TeamPokemon>;
    removePokemon(id: number): Promise<TeamPokemon>;
    listTeamPokemons(teamId: number): Promise<{
        name: string;
        types: string[];
        sprite: string;
        id: number;
        pokemonIdentifier: string;
    }[]>;
}
