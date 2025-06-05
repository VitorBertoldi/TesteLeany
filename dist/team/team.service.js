"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_entity_1 = require("./entities/team.entity");
const trainer_entity_1 = require("../trainer/entities/trainer.entity");
let TeamService = class TeamService {
    teamRepository;
    trainerRepository;
    constructor(teamRepository, trainerRepository) {
        this.teamRepository = teamRepository;
        this.trainerRepository = trainerRepository;
    }
    async create(dto) {
        const trainer = await this.trainerRepository.findOne({
            where: { id: dto.trainerId },
        });
        if (!trainer)
            throw new common_1.NotFoundException('Trainer not found');
        const team = this.teamRepository.create({
            name: dto.name,
            trainer,
        });
        return this.teamRepository.save(team);
    }
    findAll() {
        return this.teamRepository.find({ relations: ['trainer'] });
    }
    findByTrainer(trainerId) {
        return this.teamRepository.find({
            where: { trainer: { id: trainerId } },
            relations: ['trainer'],
        });
    }
    async findOne(id) {
        const team = await this.teamRepository.findOne({
            where: { id },
            relations: ['trainer'],
        });
        if (!team)
            throw new common_1.NotFoundException('Team not found');
        return team;
    }
    async update(id, dto) {
        const team = await this.teamRepository.preload({ id, ...dto });
        if (!team)
            throw new common_1.NotFoundException('Team not found');
        return this.teamRepository.save(team);
    }
    async remove(id) {
        const team = await this.findOne(id);
        return this.teamRepository.remove(team);
    }
};
exports.TeamService = TeamService;
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __param(1, (0, typeorm_1.InjectRepository)(trainer_entity_1.Trainer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TeamService);
//# sourceMappingURL=team.service.js.map