import React from "react";

function Register() {
  return (
    <div id="Register-component">
      <div className="register-container">
        <form className="form">
          <p className="title">Registrate </p>
          <p className="message">
            Regístrese ahora y obtenga acceso completo a nuestra app.{" "}
          </p>
          <div className="flex">
            <label htmlFor="Input">
              <input
                className="input"
                type="text"
                placeholder="Juan"
                required="Campo Obligatorio"
              />
              <span>Nombre</span>
            </label>
            <label htmlFor="Input">
              <input
                className="input"
                type="text"
                placeholder="Perez"
                required="Campo Obligatorio"
              />
              <span>Apellido</span>
            </label>
          </div>

          <label htmlFor="Input">
            <input
              className="input"
              type="email"
              placeholder="Ejemplo@ejemplo.com"
              required="Campo Obligatorio"
            />
            <span>Email</span>
          </label>

          <label htmlFor="Input">
            <input
              className="input"
              type="password"
              placeholder=""
              required="Campo Obligatorio"
            />
            <span>Contraseña</span>
          </label>
          <label>
            <input
              className="input"
              type="password"
              placeholder=""
              required="Campo Obligatorio"
            />
            <span>Confirm password</span>
          </label>
          <button className="submit">Enviar</button>
          <p className="signin">
            ¿Ya tienes una cuenta? <a href="#Login-component">Ingresa</a>{" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
