import { db } from "../server";
import { Car } from "../interface/cars";
import axios from "axios";
import dayjs from "dayjs";

export async function getAllCars() {
  return (await axios.get(`${process.env.EXTERNAL_API}cars`)).data;
}

export async function create(car: Car) {
  const promise = await axios.post(`${process.env.EXTERNAL_API}cars`, car);

  await db.collection("logs").insertOne({
    data_hora: dayjs().format("DD/MM/YYYY HH:mm:ss"),
    car_id: promise.data._id,
  });

  return promise;
}

const carRepo = { getAllCars, create };

export default carRepo;
