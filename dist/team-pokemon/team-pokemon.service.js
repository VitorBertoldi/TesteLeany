"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPokemonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_pokemon_entity_1 = require("./entities/team-pokemon.entity");
const team_entity_1 = require("../team/entities/team.entity");
const pokeapi_service_1 = require("../pokeapi/pokeapi.service");
let TeamPokemonService = class TeamPokemonService {
    teamPokemonRepository;
    teamRepository;
    pokeapiService;
    constructor(teamPokemonRepository, teamRepository, pokeapiService) {
        this.teamPokemonRepository = teamPokemonRepository;
        this.teamRepository = teamRepository;
        this.pokeapiService = pokeapiService;
    }
    async addPokemon(teamId, dto) {
        const team = await this.teamRepository.findOne({ where: { id: teamId } });
        if (!team)
            throw new common_1.NotFoundException("Team not found");
        const pokemonsInTeam = await this.teamPokemonRepository.find({
            where: { team: { id: teamId } },
        });
        if (pokemonsInTeam.length >= 6) {
            throw new common_1.BadRequestException("A team can have at most 6 Pokémons");
        }
        await this.pokeapiService.getPokemonInfo(dto.pokemonIdentifier);
        const teamPokemon = this.teamPokemonRepository.create({
            team,
            pokemonIdentifier: dto.pokemonIdentifier,
        });
        return this.teamPokemonRepository.save(teamPokemon);
    }
    async removePokemon(id) {
        const pokemon = await this.teamPokemonRepository.findOne({
            where: { id },
        });
        if (!pokemon)
            throw new common_1.NotFoundException("Team Pokémon not found");
        return this.teamPokemonRepository.remove(pokemon);
    }
    async listTeamPokemons(teamId) {
        const team = await this.teamRepository.findOne({ where: { id: teamId } });
        if (!team)
            throw new common_1.NotFoundException("Team not found");
        const pokemons = await this.teamPokemonRepository.find({
            where: { team: { id: teamId } },
        });
        const enriched = await Promise.all(pokemons.map(async (tp) => {
            const poke = await this.pokeapiService.getPokemonInfo(tp.pokemonIdentifier);
            return {
                id: tp.id,
                pokemonIdentifier: tp.pokemonIdentifier,
                ...poke,
            };
        }));
        return enriched;
    }
};
exports.TeamPokemonService = TeamPokemonService;
exports.TeamPokemonService = TeamPokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_pokemon_entity_1.TeamPokemon)),
    __param(1, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        pokeapi_service_1.PokeapiService])
], TeamPokemonService);
//# sourceMappingURL=team-pokemon.service.js.map