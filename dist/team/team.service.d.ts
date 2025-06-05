import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { Trainer } from '../trainer/entities/trainer.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamService {
    private readonly teamRepository;
    private readonly trainerRepository;
    constructor(teamRepository: Repository<Team>, trainerRepository: Repository<Trainer>);
    create(dto: CreateTeamDto): Promise<Team>;
    findAll(): Promise<Team[]>;
    findByTrainer(trainerId: number): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    update(id: number, dto: UpdateTeamDto): Promise<Team>;
    remove(id: number): Promise<Team>;
}
