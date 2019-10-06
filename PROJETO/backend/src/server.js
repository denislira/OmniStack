const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Iniciando Projeto");
});

app.listen(3000);
