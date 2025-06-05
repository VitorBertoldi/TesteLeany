import { Injectable, NotFoundException } from "@nestjs/common";
import axios from "axios";

interface PokeApiResponse {
  name: string;
  types: { type: { name: string } }[];
  sprites: { front_default: string };
}

@Injectable()
export class PokeapiService {
  async getPokemonInfo(identifier: string | number) {
    try {
      const { data } = await axios.get<PokeApiResponse>(
        `https://pokeapi.co/api/v2/pokemon/${identifier}`,
      );

      return {
        name: data.name,
        types: data.types.map((t) => t.type.name),
        sprite: data.sprites.front_default,
      };
    } catch {
      throw new NotFoundException(
        `Pokémon "${identifier}" not found in PokéAPI`,
      );
    }
  }
}
