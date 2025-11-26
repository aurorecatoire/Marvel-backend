const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();


const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "server on !" });
});

//COMICS
//Liste des comics

app.get("/comics", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

//COMICS/CHARACTER_ID
//Toutes les informations sur un personnage dans un comic spécifique

app.get("/comics/:characterId", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

//COMIC_ID
//Toutes les informations sur un comic spécifique

app.get("/comic/:comicId", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/5fce13de78edeb0017c92d68?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

//CHARACTERS
//Liste des personnages

app.get("/characters", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

//CHARACTER_ID
//Récupérer les informations sur un personnage en particulier

app.get("/character/:characterId", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/5fcf91f4d8a2480017b91453?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

app.listen(PORT, () => {
  console.log("Server started ☄️");
});
