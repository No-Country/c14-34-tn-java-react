import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    age: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== passwordConfirm) {
      setErrorMessage("Las contraseñas no coinciden");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
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
        const responseData = await response.json();
        localStorage.setItem("jwtToken", responseData.token);
        setSuccessMessage("Registro exitoso");
        window.location.href = "/";
      } else {
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
      setPasswordConfirm(value);
    } else {
      setFormData((prevData) => ({ ...prevData, [id]: value }));
    }
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
              <label htmlFor="nombre" />

              <label htmlFor="name">
                <input
                  id="name"
                  className="input"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <span>Nombre</span>
              </label>

              <label htmlFor="apellido" />

              <label htmlFor="lastname">
                <input
                  id="lastname"
                  className="input"
                  type="text"
                  required
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
                <span>Apellido</span>
              </label>
            </div>

            <label htmlFor="email">
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

            <label htmlFor="age">
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

            <label htmlFor="pass" />

            <label htmlFor="password">
              <input
                id="password"
                className="input"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <span>Contraseña</span>
            </label>

            <label htmlFor="confirmPassword">
              <input
                id="confirmPassword"
                className="input"
                type="password"
                required
                value={passwordConfirm}
                onChange={handleInputChange}
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
