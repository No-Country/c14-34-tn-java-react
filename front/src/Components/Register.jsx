import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
    nombre: "",
    apellido: "",
    age: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.pass !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    const url = "http://18.220.229.238/auth/register";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        // Registro exitoso
        setSuccessMessage("Registro exitoso");
      } else {
        // Error en la solicitud
        setErrorMessage("Error al registrar");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setErrorMessage("Error en la solicitud");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "confirmPassword") {
      if (value !== formData.pass) {
        // Las contraseñas no coinciden
        // Puedes mostrar un mensaje de error, deshabilitar el botón de envío, etc.
      } else {
        // Las contraseñas coinciden
        // Puedes ocultar el mensaje de error si estaba visible
      }
    }
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  return (
    <div id="Register-component">
      <div className="register-container">
        <div className="register-shadow">
          <form className="form" onSubmit={handleSubmit}>
            <p className="title">Regístrate</p>
            <p className="message">
              Regístrate ahora y obtén acceso completo a nuestra app.
            </p>
            <div className="flex">
              <label htmlhtmlFor="nombre">
                <input
                  id="nombre"
                  className="input"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                <span>Nombre</span>
              </label>
              <label htmlhtmlFor="apellido">
                <input
                  id="apellido"
                  className="input"
                  type="text"
                  required
                  value={formData.apellido}
                  onChange={handleInputChange}
                />
                <span>Apellido</span>
              </label>
            </div>

            <label htmlhtmlFor="email">
              <input
                id="email"
                className="input"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              <span>Email</span>
            </label>

            <label htmlhtmlFor="age">
              <input
                id="age"
                className="input"
                type="number"
                required
                value={formData.age}
                onChange={handleInputChange}
              />
              <span>Edad</span>
            </label>
            <label htmlhtmlFor="pass">
              <input
                id="pass"
                className="input"
                type="password"
                required
                value={formData.pass}
                onChange={handleInputChange}
              />
              <span>Contraseña</span>
            </label>

            <label htmlhtmlFor="confirmPassword">
              <input
                id="confirmPassword"
                className="input"
                type="password"
                required
              />
              <span>Confirmar contraseña</span>
            </label>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <button type="submit" className="submit">
              Enviar
            </button>
            <p className="signin">
              ¿Ya tienes una cuenta? <NavLink to={"/login"}>Ingresa</NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
