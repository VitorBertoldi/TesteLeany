import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("TeamController (e2e)", () => {
  let app: INestApplication;
  let trainerId: number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let teamId: number;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const trainerRes = await request(app.getHttpServer())
      .post("/trainers")
      .send({ name: "Test Trainer", city: "Test City" });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    trainerId = trainerRes.body.id;
  });

  it("/teams (POST) deve criar um time", async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const res = await request(app.getHttpServer())
      .post("/teams")
      .send({ name: "Team Rocket", trainerId })
      .expect(201);

    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Team Rocket");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    teamId = res.body.id;
  });

  it("/teams/trainer/:id (GET) deve listar times do treinador", async () => {
    const res = await request(app.getHttpServer())
      .get(`/teams/trainer/${trainerId}`)
      .expect(200);

    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0].trainer.id).toBe(trainerId);
  });

  afterAll(async () => {
    await app.close();
  });
});
