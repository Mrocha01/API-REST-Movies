import { Router } from "express";
import {
  createMovie,
  findMovieById,
  moviesAll,
  removeMovie,
} from "./controllers/movieController";
import { validate } from "./middleware/handleValidation";
import { movieValidator } from "./middleware/movieValidation";

const router = Router();

export default router
  .get("/movie/all", moviesAll)
  .get("/movie/:id", findMovieById)
  .post("/movie", validate(movieValidator), createMovie)
  .delete("/movie/remove/:id", validate(movieValidator), removeMovie);
