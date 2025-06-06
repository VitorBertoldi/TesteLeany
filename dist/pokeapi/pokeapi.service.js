"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeapiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let PokeapiService = class PokeapiService {
    async getPokemonInfo(identifier) {
        try {
            const { data } = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
            return {
                name: data.name,
                types: data.types.map((t) => t.type.name),
                sprite: data.sprites.front_default,
            };
        }
        catch {
            throw new common_1.NotFoundException(`Pokémon "${identifier}" not found in PokéAPI`);
        }
    }
};
exports.PokeapiService = PokeapiService;
exports.PokeapiService = PokeapiService = __decorate([
    (0, common_1.Injectable)()
], PokeapiService);
//# sourceMappingURL=pokeapi.service.js.map