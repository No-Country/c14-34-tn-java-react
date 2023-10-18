import React from "react";

function Login() {
  return (
    <div className="login-container">
      <div class="login-box">
        <h2 className="login-title">Si no Tenes una Cuenta Registrate</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <center>
            <a href="#">
              SEND
              <span></span>
            </a>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
