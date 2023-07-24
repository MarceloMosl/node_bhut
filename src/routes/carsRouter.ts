import { createCar, getAllCars } from "../controllers/carsController";
import { validateBody } from "../middlewares/validation-middleware";
import carSchemma from "../schemas/carSchemma";
import { Router } from "express";

const carsRouter = Router();

carsRouter.get("/listCars", getAllCars);
carsRouter.post("/createCar", validateBody(carSchemma), createCar);

export default carsRouter;
