import { db } from "../server";

function getAllLogs() {
  return db.collection("logs").find().toArray();
}

const logRepo = { getAllLogs };

export default logRepo;
