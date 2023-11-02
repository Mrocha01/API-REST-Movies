import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    Logger.error(error.message);
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado!" });
    }

    return res.status(200).json(movie);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    Logger.error(error.message);
  }
}

export async function moviesAll(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();

    if (!movies) {
      return res
        .status(404)
        .json({ message: "Galeria vazia, por favor insira algum filme!" });
    }

    return res.status(200).json(movies);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    Logger.error(error.message);
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado!" });
    }

    return res
      .status(200)
      .json({ message: "Filme removido com sucesso!", movie });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    Logger.error(error.message);
  }
}
