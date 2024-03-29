import express from "express";
import dotenv from "dotenv";

import { contactoRouter } from "./routes/contacto.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

//RUTAS
app.use(contactoRouter);


//LISTEN
app.listen(port, () => {
  console.log(`Servidor corriendo en localhost:${port}`);
});
