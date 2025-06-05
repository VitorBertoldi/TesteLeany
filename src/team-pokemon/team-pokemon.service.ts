import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TeamPokemon } from "./entities/team-pokemon.entity";
import { Team } from "../team/entities/team.entity";
import { CreateTeamPokemonDto } from "./dto/create-team-pokemon.dto";
import { PokeapiService } from "../pokeapi/pokeapi.service";

@Injectable()
export class TeamPokemonService {
  constructor(
    @InjectRepository(TeamPokemon)
    private teamPokemonRepository: Repository<TeamPokemon>,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
    private pokeapiService: PokeapiService,
  ) {}

  async addPokemon(teamId: number, dto: CreateTeamPokemonDto) {
    const team = await this.teamRepository.findOne({ where: { id: teamId } });
    if (!team) throw new NotFoundException("Team not found");

    const pokemonsInTeam = await this.teamPokemonRepository.find({
      where: { team: { id: teamId } },
    });
    if (pokemonsInTeam.length >= 6) {
      throw new BadRequestException("A team can have at most 6 Pokémons");
    }

    await this.pokeapiService.getPokemonInfo(dto.pokemonIdentifier);

    const teamPokemon = this.teamPokemonRepository.create({
      team,
      pokemonIdentifier: dto.pokemonIdentifier,
    });

    return this.teamPokemonRepository.save(teamPokemon);
  }

  async removePokemon(id: number) {
    const pokemon = await this.teamPokemonRepository.findOne({
      where: { id },
    });
    if (!pokemon) throw new NotFoundException("Team Pokémon not found");
    return this.teamPokemonRepository.remove(pokemon);
  }

  async listTeamPokemons(teamId: number) {
    const team = await this.teamRepository.findOne({ where: { id: teamId } });
    if (!team) throw new NotFoundException("Team not found");

    const pokemons = await this.teamPokemonRepository.find({
      where: { team: { id: teamId } },
    });

    const enriched = await Promise.all(
      pokemons.map(async (tp) => {
        const poke = await this.pokeapiService.getPokemonInfo(
          tp.pokemonIdentifier,
        );
        return {
          id: tp.id,
          pokemonIdentifier: tp.pokemonIdentifier,
          ...poke,
        };
      }),
    );
    return enriched;
  }
}
