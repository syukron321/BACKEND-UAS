const express = require("express");
const routerFotos = express.Router();
const controllerFotos = require("../controllers/fotos");

routerFotos
  .route("/fotos")
  .get(controllerFotos.getFotos)
  .post(controllerFotos.insert);

routerFotos
  .route("/fotos/:id")
  .put(controllerFotos.update)
  .delete(controllerFotos.delete)
  .get(controllerFotos.getFotosById);

routerFotos
  .route("/fotos/detail/:id")
  .get(controllerFotos.getDetailById)
  .put(controllerFotos.insertDetail);
module.exports = routerFotos;
