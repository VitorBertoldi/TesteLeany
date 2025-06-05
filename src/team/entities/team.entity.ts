import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Trainer } from "../../trainer/entities/trainer.entity";
import { TeamPokemon } from "../../team-pokemon/entities/team-pokemon.entity";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Trainer, (trainer) => trainer.teams, { onDelete: "CASCADE" })
  trainer: Trainer;

  @OneToMany(() => TeamPokemon, (teamPokemon) => teamPokemon.team)
  pokemons: TeamPokemon[];
}
