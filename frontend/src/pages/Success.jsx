import { Link } from "react-router-dom";
import "./Success.css";

export default function Success() {
  return (
    <div className="success-bg">
      <div className="success-card">
        <h2>¡Usuario registrado con éxito!</h2>
        <p className="success-text">Ya puedes iniciar sesión para acceder al sistema.</p>

        <Link to="/login">
          <button className="success-btn">Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
}
