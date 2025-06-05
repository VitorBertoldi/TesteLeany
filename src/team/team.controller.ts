import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { TeamService } from "./team.service";
import { CreateTeamDto } from "./dto/create-team.dto";
import { UpdateTeamDto } from "./dto/update-team.dto";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("teams")
@Controller("teams")
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() dto: CreateTeamDto) {
    return this.teamService.create(dto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get("/trainer/:trainerId")
  findByTrainer(@Param("trainerId") trainerId: string) {
    return this.teamService.findByTrainer(+trainerId);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.teamService.findOne(+id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() dto: UpdateTeamDto) {
    return this.teamService.update(+id, dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.teamService.remove(+id);
  }
}
