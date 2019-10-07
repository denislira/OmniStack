const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

//GET, POST, PUT, DELETE

//req.query = acessar query params para filtros
//req.params = acessar route params para edição delete
//req.body = acessar copo da requisicao para criacao ou edicao
const url = "mongodb://localhost:27017/omnistack";

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3000);
