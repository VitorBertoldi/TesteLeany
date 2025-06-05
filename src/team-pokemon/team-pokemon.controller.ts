import { Controller, Post, Body, Param, Delete, Get } from "@nestjs/common";
import { TeamPokemonService } from "./team-pokemon.service";
import { CreateTeamPokemonDto } from "./dto/create-team-pokemon.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("team-pokemons")
@Controller("teams/:teamId/pokemons")
export class TeamPokemonController {
  constructor(private readonly service: TeamPokemonService) {}

  @Post()
  add(@Param("teamId") teamId: string, @Body() dto: CreateTeamPokemonDto) {
    return this.service.addPokemon(+teamId, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.service.removePokemon(+id);
  }

  @Get()
  list(@Param("teamId") teamId: string) {
    return this.service.listTeamPokemons(+teamId);
  }
}
