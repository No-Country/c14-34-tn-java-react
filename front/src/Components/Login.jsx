import React from "react";

function Login() {
  return (
    <div className="login-container" id="Login-component">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
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
