import axios from "axios";

// Instancia de Axios para tu API
const API = axios.create({
  baseURL: "http://localhost:4000/api/auth",
});

// ----------- AUTH REQUESTS -----------

export const register = (data) => {
  return API.post("/register", data);
};

export const login = (data) => {
  return API.post("/login", data);
};

export const refreshToken = () => {
  return API.post("/refresh");
};

export const verifyToken = (token) => {
  return API.post("/verify", { token });
};
