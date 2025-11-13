// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Probar conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado correctamente a PostgreSQL");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
  }
})();

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando con PostgreSQL 🚀");
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
