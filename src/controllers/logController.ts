import logService from "../services/logService";
import { Request, Response } from "express";

export async function getAllLogs(req: Request, res: Response) {
  try {
    const promise = await logService.getAllLogs();

    return res.status(200).send(promise);
  } catch (error) {
    res.status(500).send(error);
  }
}
