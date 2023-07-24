import logRepo from "../repositories/logRepo";

export async function getAllLogs() {
  const promise = await logRepo.getAllLogs();

  return promise;
}
const logService = { getAllLogs };
export default logService;
