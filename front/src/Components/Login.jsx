

function Login() {
  return (
    <div className="login-container" id="Login-component">
      <div className="login-box">
        <h2 className="login-title">Ingresar</h2>
        <form>
          <div className="user-box">
            <input type="Email" name="" required="Campo Obligatorio" />
            <label htmlFor="Input"> Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="Campo Obligatorio" />
            <label htmlFor="Input">Contraseña</label>
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
