import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTrainerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  city?: string;
}
