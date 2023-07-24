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
