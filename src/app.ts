import express from "express";
import cors from "cors";
import carsRouter from "./routes/carsRouter";
import { initDb } from "./config/database";
import logRouter from "./routes/logsRouter";

const app = express();
require("dotenv").config();

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use(carsRouter)
  .use(logRouter);

export async function init() {
  try {
    await initDb();
  } catch (error) {
    return error;
  }
}
export default app;
