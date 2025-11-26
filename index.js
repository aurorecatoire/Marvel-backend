const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "server on" });
});

app.get("/characters", async (req, res) => {
  try {
    const result = await axios.get(
      `https://lereacteur-marvel-api.netlify.app/characters?apiKey=${API_KEY}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API" });
  }
});

app.listen(PORT, () => {
  console.log("Server started ☄️");
});
