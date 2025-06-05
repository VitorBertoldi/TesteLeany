import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trainer } from './entities/trainer.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';

@Injectable()
export class TrainerService {
  constructor(
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>,
  ) {}

  create(dto: CreateTrainerDto) {
    const trainer = this.trainerRepository.create(dto);
    return this.trainerRepository.save(trainer);
  }

  findAll() {
    return this.trainerRepository.find({ relations: ['teams'] });
  }

  async findOne(id: number) {
    const trainer = await this.trainerRepository.findOne({
      where: { id },
      relations: ['teams'],
    });
    if (!trainer) throw new NotFoundException('Trainer not found');
    return trainer;
  }

  async update(id: number, dto: UpdateTrainerDto) {
    const trainer = await this.trainerRepository.preload({ id, ...dto });
    if (!trainer) throw new NotFoundException('Trainer not found');
    return this.trainerRepository.save(trainer);
  }

  async remove(id: number) {
    const trainer = await this.findOne(id);
    return this.trainerRepository.remove(trainer);
  }
}
