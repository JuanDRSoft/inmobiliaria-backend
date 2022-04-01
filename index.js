import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuarioRoutes from "./routes/usuariosRoutes.js";
import inmueblesRoutes from "./routes/inmueblesRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//Configurar cors
const whitelist = [process.env.FRONTEND_URL];
console.log(whitelist);

const corsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    if (whitelist.includes(origin)) {
      //Puede consultar la API
      callback(null, true);
    } else {
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors());

//Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/inmuebles", inmueblesRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
