import mongoose from "mongoose";
import config from "config";

async function connect() {
  const dbUri = config.get<string>("Db_Uri");

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}

export default connect;
