import { Car } from "../interface/cars";
import carRepo from "../repositories/carsRepo";
require("dotenv").config();

export async function getAllCars(): Promise<Car[]> {
  return await carRepo.getAllCars();
}

export async function create(body: Car) {
  try {
    const promise = await carRepo.create(body);
    return promise.data;
  } catch (error) {
    throw new Error(error);
  }
}

const carsService = { getAllCars, create };

export default carsService;
