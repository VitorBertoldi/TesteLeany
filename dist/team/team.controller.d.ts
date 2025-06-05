import { TeamService } from "./team.service";
import { CreateTeamDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    create(dto: CreateTeamDto): Promise<import("./entities/team.entity").Team>;
    findAll(): Promise<import("./entities/team.entity").Team[]>;
    findByTrainer(trainerId: string): Promise<import("./entities/team.entity").Team[]>;
    findOne(id: string): Promise<import("./entities/team.entity").Team>;
    update(id: string, dto: UpdateTeamDto): Promise<import("./entities/team.entity").Team>;
    remove(id: string): Promise<import("./entities/team.entity").Team>;
}
