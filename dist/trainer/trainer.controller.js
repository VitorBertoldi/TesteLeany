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
exports.TrainerController = void 0;
const common_1 = require("@nestjs/common");
const trainer_service_1 = require("./trainer.service");
const create_trainer_dto_1 = require("./dto/create-trainer.dto");
const update_trainer_dto_1 = require("./dto/update-trainer.dto");
const swagger_1 = require("@nestjs/swagger");
let TrainerController = class TrainerController {
    trainerService;
    constructor(trainerService) {
        this.trainerService = trainerService;
    }
    create(dto) {
        return this.trainerService.create(dto);
    }
    findAll() {
        return this.trainerService.findAll();
    }
    findOne(id) {
        return this.trainerService.findOne(+id);
    }
    update(id, dto) {
        return this.trainerService.update(+id, dto);
    }
    remove(id) {
        return this.trainerService.remove(+id);
    }
};
exports.TrainerController = TrainerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trainer_dto_1.CreateTrainerDto]),
    __metadata("design:returntype", void 0)
], TrainerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrainerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrainerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_trainer_dto_1.UpdateTrainerDto]),
    __metadata("design:returntype", void 0)
], TrainerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TrainerController.prototype, "remove", null);
exports.TrainerController = TrainerController = __decorate([
    (0, swagger_1.ApiTags)('trainers'),
    (0, common_1.Controller)('trainers'),
    __metadata("design:paramtypes", [trainer_service_1.TrainerService])
], TrainerController);
//# sourceMappingURL=trainer.controller.js.map