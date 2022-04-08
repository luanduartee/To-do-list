const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

//Exportando o método
routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask);

module.exports = routes;
