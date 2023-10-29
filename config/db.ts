import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>("Db_Uri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("Connected to database");
  } catch (error) {
    Logger.error(error);
  }
}

export default connect;
