import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Team } from '../../team/entities/team.entity';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  city: string;

  @OneToMany(() => Team, (team) => team.trainer)
  teams: Team[];
}
