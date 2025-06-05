import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { Trainer } from '../trainer/entities/trainer.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) {}

  async create(dto: CreateTeamDto) {
    const trainer = await this.trainerRepository.findOne({
      where: { id: dto.trainerId },
    });
    if (!trainer) throw new NotFoundException('Trainer not found');

    const team = this.teamRepository.create({
      name: dto.name,
      trainer,
    });

    return this.teamRepository.save(team);
  }

  findAll() {
    return this.teamRepository.find({ relations: ['trainer'] });
  }

  findByTrainer(trainerId: number) {
    return this.teamRepository.find({
      where: { trainer: { id: trainerId } },
      relations: ['trainer'],
    });
  }

  async findOne(id: number) {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['trainer'],
    });
    if (!team) throw new NotFoundException('Team not found');
    return team;
  }

  async update(id: number, dto: UpdateTeamDto) {
    const team = await this.teamRepository.preload({ id, ...dto });
    if (!team) throw new NotFoundException('Team not found');
    return this.teamRepository.save(team);
  }

  async remove(id: number) {
    const team = await this.findOne(id);
    return this.teamRepository.remove(team);
  }
}
