import { TrainerService } from './trainer.service';
import { CreateTrainerDto } from './dto/create-trainer.dto';
import { UpdateTrainerDto } from './dto/update-trainer.dto';
export declare class TrainerController {
    private readonly trainerService;
    constructor(trainerService: TrainerService);
    create(dto: CreateTrainerDto): Promise<import("./entities/trainer.entity").Trainer>;
    findAll(): Promise<import("./entities/trainer.entity").Trainer[]>;
    findOne(id: string): Promise<import("./entities/trainer.entity").Trainer>;
    update(id: string, dto: UpdateTrainerDto): Promise<import("./entities/trainer.entity").Trainer>;
    remove(id: string): Promise<import("./entities/trainer.entity").Trainer>;
}
