const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const posts = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "./data/posts.json"))
);

app.get("/posts", (req, res) => {
  // modifique esta rota para que use o limite passado pela variável "limit" via query string
  // e envie somente a quantidade especificada.
  // se o limite não for especificado, use como valor padrão 10.
  res.send(posts);
});

module.exports = app;
