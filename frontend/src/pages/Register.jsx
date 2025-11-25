import { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router-dom";
import "./Paginas.css"; 

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(form);
      window.location.href = "/success";
    } catch (err) {
      setMsg("Error al registrar.");
    }   
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>Crear Cuenta</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            placeholder="Contraseña"
            type="password"
            onChange={handleChange}
            required
          />

          <button type="submit">Registrarse</button>
        </form>

        {msg && <p className="login-error">{msg}</p>}

        <p className="login-register-text">
          ¿Ya tienes cuenta?
          <a className="login-register-link" href="/login">
            {" "}
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}
