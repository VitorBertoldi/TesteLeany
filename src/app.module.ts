import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerModule } from './trainer/trainer.module';
import { TeamModule } from './team/team.module';
import { TeamPokemonModule } from './team-pokemon/team-pokemon.module';
import { PokeapiModule } from './pokeapi/pokeapi.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'pokemon',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TrainerModule,
    TeamModule,
    TeamPokemonModule,
    PokeapiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
