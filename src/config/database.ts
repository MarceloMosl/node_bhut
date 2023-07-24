import { Db, MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGO_URI);

export async function initDb() {
  try {
    await mongoClient.connect();
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }

  const db = mongoClient.db("bhut");

  return db;
}
