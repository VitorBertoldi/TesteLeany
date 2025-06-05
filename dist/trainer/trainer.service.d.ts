import { Repository } from 'typeorm';
import { Trainer } from './entities/trainer.entity';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
export declare class TrainerService {
    private readonly trainerRepository;
    constructor(trainerRepository: Repository<Trainer>);
    create(dto: CreateTrainerDto): Promise<Trainer>;
    findAll(): Promise<Trainer[]>;
    findOne(id: number): Promise<Trainer>;
    update(id: number, dto: UpdateTrainerDto): Promise<Trainer>;
    remove(id: number): Promise<Trainer>;
}
