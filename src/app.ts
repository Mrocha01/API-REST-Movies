import { config as configure } from "dotenv";
configure();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/MorganMiddleware";

const app = express();

app.use(express.json());

const port = config.get<number>("port");

app.use(morganMiddleware);

app.use("/api/", router);

app.listen(port, async () => {
  await db();

  Logger.info(`listening on port ${port}`);
});
