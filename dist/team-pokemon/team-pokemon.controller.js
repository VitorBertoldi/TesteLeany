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
exports.TeamPokemonController = void 0;
const common_1 = require("@nestjs/common");
const team_pokemon_service_1 = require("./team-pokemon.service");
const create_team_pokemon_dto_1 = require("./dto/create-team-pokemon.dto");
const swagger_1 = require("@nestjs/swagger");
let TeamPokemonController = class TeamPokemonController {
    service;
    constructor(service) {
        this.service = service;
    }
    add(teamId, dto) {
        return this.service.addPokemon(+teamId, dto);
    }
    remove(id) {
        return this.service.removePokemon(+id);
    }
    list(teamId) {
        return this.service.listTeamPokemons(+teamId);
    }
};
exports.TeamPokemonController = TeamPokemonController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('teamId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_team_pokemon_dto_1.CreateTeamPokemonDto]),
    __metadata("design:returntype", void 0)
], TeamPokemonController.prototype, "add", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamPokemonController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('teamId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamPokemonController.prototype, "list", null);
exports.TeamPokemonController = TeamPokemonController = __decorate([
    (0, swagger_1.ApiTags)('team-pokemons'),
    (0, common_1.Controller)('teams/:teamId/pokemons'),
    __metadata("design:paramtypes", [team_pokemon_service_1.TeamPokemonService])
], TeamPokemonController);
//# sourceMappingURL=team-pokemon.controller.js.map