import { useEffect } from "react";

export default function Dashboard() {
  const token = sessionStorage.getItem("accessToken");
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
    window.location.href = "/login";
  };
  }, []);

  return (
    
    <div>
      <h2>Bienvenido al Dashboard</h2>
      <p>Tu token actual:</p>
      <pre>{token}</pre>
    </div>
  );
}
