const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

//Exportando o método
routes.get("/", TaskController.getAll)

module.exports = routes