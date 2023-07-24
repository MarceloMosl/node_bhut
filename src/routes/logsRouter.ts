import { getAllLogs } from "../controllers/logController";
import { Router } from "express";

const logRouter = Router();

logRouter.get("/logs", getAllLogs);

export default logRouter;
