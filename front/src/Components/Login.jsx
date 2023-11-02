import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://18.220.229.238/auth/login"; // URL de autenticación
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        // La solicitud se realizó con éxito, puedes manejar la respuesta
        const responseData = await response.json();
        localStorage.setItem("jwtToken", responseData.token);
        document.getElementById("rta-login").innerHTML =
          "Inicio de sesión exitoso";
        window.location.href = "/";
      } else {
        // Ocurrió un error en la solicitud, puedes manejarlo
        console.error("Error al iniciar sesión");
        document.getElementById("rta-login").innerHTML =
          "Error al iniciar sesión Verifique Los Datos Ingresados o Cree una Cuenta";
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      (document.getElementById("rta-login").innerHTML =
        "Error en la solicitud:"),
        error;
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div className="login-container" id="Login-component">
      <div className="login-box-container">
        <div className="login-box">
          <h2 className="login-title">Ingresar</h2>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                type="email"
                id="email"
                required="Campo Obligatorio"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email"> Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                id="password"
                required="Campo Obligatorio"
                value={formData.password}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Contraseña</label>
            </div>
            <center>
              <button type="submit">Enviar</button>
              <p id="rta-login"></p>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
