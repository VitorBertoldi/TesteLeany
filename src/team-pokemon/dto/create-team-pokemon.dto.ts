import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTeamPokemonDto {
  @ApiProperty({ example: "pikachu", description: "ID ou nome do Pokémon" })
  @IsString()
  @IsNotEmpty()
  pokemonIdentifier: string;
}
