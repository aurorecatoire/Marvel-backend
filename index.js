const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

//COMICS
//Liste des comics

app.get("/comics", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 100;
    const skip = Number(req.query.skip) || 0;
    const title=req.query.title || "";
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}&skip=${skip}&limit=${limit}&title=${title}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//COMICS/CHARACTER_ID
//Toutes les informations sur un personnage dans un comic spécifique

app.get("/comics/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//COMIC_ID
//Toutes les informations sur un comic spécifique

app.get("/comic/:comicId", async (req, res) => {
  try {
    const { comicId } = req.params;
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${comicId}?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//CHARACTERS
//Liste des personnages

app.get("/characters", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 100;
    const skip = Number(req.query.skip) || 0;
    const name=req.query.name || ""
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API_KEY}&skip=${skip}&limit=${limit}&name=${name}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//CHARACTER_ID
//Récupérer les informations sur un personnage en particulier

app.get("/character/:characterId", async (req, res) => {
  try {
    const { characterId } = req.params;
    
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.all(/.*/, (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(PORT, () => {
  console.log("Server started ☄️");
});
