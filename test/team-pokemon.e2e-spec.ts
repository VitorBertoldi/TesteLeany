import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("TeamPokemonController (e2e)", () => {
  let app: INestApplication;
  let trainerId: number;
  let teamId: number;
  let teamPokemonId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const trainerRes = await request(app.getHttpServer())
      .post("/trainers")
      .send({ name: "Misty", city: "Cerulean" });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    trainerId = trainerRes.body.id;

    // cria time
    const teamRes = await request(app.getHttpServer())
      .post("/teams")
      .send({ name: "Team Misty", trainerId });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    teamId = teamRes.body.id;
  });

  it("/teams/:teamId/pokemons (POST) deve adicionar um Pokémon", async () => {
    const res = await request(app.getHttpServer())
      .post(`/teams/${teamId}/pokemons`)
      .send({ pokemonIdentifier: "psyduck" })
      .expect(201);

    expect(res.body).toHaveProperty("id");
    expect(res.body.pokemonIdentifier).toBe("psyduck");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    teamPokemonId = res.body.id;
  });

  it("/teams/:teamId/pokemons (GET) deve listar os Pokémons do time", async () => {
    const res = await request(app.getHttpServer())
      .get(`/teams/${teamId}/pokemons`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].name).toBe("psyduck");
  });

  it("/teams/:teamId/pokemons/:id (DELETE) deve remover o Pokémon do time", async () => {
    await request(app.getHttpServer())
      .delete(`/teams/${teamId}/pokemons/${teamPokemonId}`)
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
