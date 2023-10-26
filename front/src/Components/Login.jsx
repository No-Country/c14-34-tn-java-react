import React from "react";

function Login() {
  return (
    <div className="login-container" id="Login-component">
      <div className="login-box">
        <h2 className="login-title">Ingresar</h2>
        <form>
          <div className="user-box">
            <input type="Email" id="login-email" required="Campo Obligatorio" />
            <label htmlFor="login-email"> Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="login-pass"
              required="Campo Obligatorio"
            />
            <label htmlFor="login-pass">Contraseña</label>
          </div>
          <center>
            <a linkhref="#">
              Enviar
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
