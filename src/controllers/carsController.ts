import carsService from "../services/carsService";
import { Request, Response } from "express";

export async function getAllCars(req: Request, res: Response) {
  const response = await carsService.getAllCars();
  return res.send(response);
}

export async function createCar(req: Request, res: Response) {
  const response = await carsService.create(req.body);
  return res.send(response);
}
