import { Router, Request, Response } from "express";
import { createMovie } from "./controllers/movieController";
import { validate } from "./middleware/handleValidation";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).json({ message: "Welcome!" });
  })
  .post("/movie", validate, createMovie);
