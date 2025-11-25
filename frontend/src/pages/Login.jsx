import { useState } from "react";
import { login } from "../api/auth";
import { Link } from "react-router-dom";
import "./Paginas.css";



export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(form);

      localStorage.setItem("refreshToken", res.data.refreshToken);
      sessionStorage.setItem("accessToken", res.data.accessToken);

      window.location.href = "/dashboard";
    } catch (err) {
      setMsg("Credenciales incorrectas.");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />

          <button type="submit">Entrar</button>
        </form>

        {msg && <p className="login-error">{msg}</p>}

        <p className="login-register-text">
          ¿No tienes una cuenta?{" "}
          <Link to="/register" className="login-register-link">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
