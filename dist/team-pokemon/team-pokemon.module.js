"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPokemonModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const team_pokemon_entity_1 = require("./entities/team-pokemon.entity");
const team_pokemon_service_1 = require("./team-pokemon.service");
const team_pokemon_controller_1 = require("./team-pokemon.controller");
const team_entity_1 = require("../team/entities/team.entity");
const pokeapi_module_1 = require("../pokeapi/pokeapi.module");
let TeamPokemonModule = class TeamPokemonModule {
};
exports.TeamPokemonModule = TeamPokemonModule;
exports.TeamPokemonModule = TeamPokemonModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([team_pokemon_entity_1.TeamPokemon, team_entity_1.Team]), pokeapi_module_1.PokeapiModule],
        controllers: [team_pokemon_controller_1.TeamPokemonController],
        providers: [team_pokemon_service_1.TeamPokemonService],
    })
], TeamPokemonModule);
//# sourceMappingURL=team-pokemon.module.js.map