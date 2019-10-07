const express = require("express");
const SessionController = require("./controllers/SessionController");
const routes = express.Router();

routes.post("/sessions", SessionController.store);
// método '.store' criado em Sessioncontroller

module.exports = routes;
