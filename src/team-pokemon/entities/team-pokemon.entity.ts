import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from '../../team/entities/team.entity';

@Entity()
export class TeamPokemon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokemonIdentifier: string;

  @ManyToOne(() => Team, (team) => team.pokemons, { onDelete: 'CASCADE' })
  team: Team;
}
