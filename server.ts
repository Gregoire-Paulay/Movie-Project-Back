import express, { Application, Request, Response } from "express";
const movie = require("./data/movie.json");

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Typescript with Express");
});

app.get("/movies", (req, res) => {
  try {
    const movieData = movie;
    res.status(201).json(movieData);
  } catch (error) {
    console.log(error);
  }
});

// Fin du serveur
app.all("*", (req, res) => {
  return res.status(404).json("Cette page n'existe pas: essaye autre chose");
});
app.listen(4009, () => {
  console.log("Server has started !");
});
