// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import "./models/User.js";
import "./models/Task.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

// Configuración de variables de entorno
dotenv.config();

// Inicialización de Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

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

// Creación automática de tablas
sequelize
  .sync({ alter: true })
  .then(() => console.log("✅ Tablas sincronizadas con la base de datos"))
  .catch((err) => console.error("❌ Error al sincronizar las tablas:", err));

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

process.on("uncaughtException", (err) => {
  console.error("⚠️ Excepción no controlada:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("⚠️ Promesa rechazada sin manejar:", reason);
});