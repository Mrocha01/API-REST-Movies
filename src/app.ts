import { config as configure } from "dotenv";
configure();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";

const app = express();

app.use(express.json());

const port = config.get<number>("port");

app.use("/api/", router);

app.listen(port, async () => {
  await db();

  console.log(`listening on port ${port}`);
});