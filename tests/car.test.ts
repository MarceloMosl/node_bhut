import app, { init } from "../src/app";
import supertest from "supertest";

const api = supertest(app);
beforeAll(async () => {
  await init();
});

describe("Should return OK and status 200 when getting all cars", () => {
  it("testando GET/cars", async () => {
    const resultado = await api.get("/cars");
    expect(resultado.status).toBe(200);
  });
});

describe("Should return Error when missing a key object", () => {
  it("testando post/createCars", async () => {
    const invalidBody = {};

    const resultado = (await api.post("/createCars")).body(invalidBody);
    expect(resultado.status).toBe(422);
  });
});

describe("Should return OK when creating a new Car", () => {
  it("testando post/createCars", async () => {
    const validBody = {
      title: "Prisma",
      brand: "VW",
      price: "70.000",
      age: 2020,
    };

    const resultado = (await api.post("/createCars")).body(validBody);
    expect(resultado.status).toBe(200);
  });
});
