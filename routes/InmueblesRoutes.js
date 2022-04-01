import {
  nuevoInmueble,
  obtenerProyectos,
} from "../controllers/inmuebleController.js";
import checkAuth from "../middleware/CheckAuth.js";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get(checkAuth, obtenerProyectos)
  .post(checkAuth, nuevoInmueble);

export default router;
