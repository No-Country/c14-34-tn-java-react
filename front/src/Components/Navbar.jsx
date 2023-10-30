import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navGral">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample11"
            aria-controls="navbarsExample11"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-lg-flex"
            id="navbarsExample11"
          >
            <NavLink to={"/"} className="navbar-brand col-lg-3 me-0">
              <h1 className="nav-title bounce-in-top ">Blon Sports</h1>
            </NavLink>
            <div className="nav-menu">
              <ul>
                <li className="menu ">
                  <NavLink to={"/productos"}>Productos</NavLink>
                </li>
                <li className="menu">
                  <NavLink to={"/calzados"}>Calzados</NavLink>
                </li>
                <li className="menu">
                  <NavLink to={"/accesorios"}>Accesorios</NavLink>
                </li>
                <li className="menu">
                  <NavLink to={"/prendas"}>Prendas</NavLink>
                </li>
              </ul>
            </div>

            <div className=" btn-nav-container">
              <div className="ingresar-btn">
                <NavLink to={"/login"} className="btn btn-dark">
                  Ingresar
                </NavLink>
              </div>
              <div className="btn-nav-registrate">
                <NavLink to={"/register"} className="btn btn-dark">
                  Registrate
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
