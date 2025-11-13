import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT,
    logging: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("✅ Conectado correctamente a PostgreSQL");
} catch (error) {
  console.error("❌ Error al conectar a la base de datos:", error);
}

export default sequelize;
