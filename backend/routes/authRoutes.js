import express from "express";
// Exporta las constantes de backend/routes/authController.js
import { registerUser, loginUser, refreshToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshToken);

export default router;
