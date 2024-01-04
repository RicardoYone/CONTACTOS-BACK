import { Router } from "express";
import {
  crearContacto,
  mostrarContactos,
  actualizarContacto,
  eliminarContacto,
} from "../controllers/contacto.controllers.js";

export const contactoRouter = Router();

contactoRouter.get("/", mostrarContactos);
contactoRouter.post("/guardar", crearContacto);
contactoRouter.put("/actualizar/:id", actualizarContacto);
contactoRouter.delete("/eliminar/:id", eliminarContacto);
