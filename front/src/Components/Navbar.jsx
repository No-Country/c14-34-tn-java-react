import React from "react";

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
            <a className="navbar-brand col-lg-3 me-0" href="#">
              <h1 className="nav-title bounce-in-top ">Blon Sports</h1>
            </a>
            <div className="nav-menu">
              <ul>
                <li className="menu ">
                  <a href="">Productos</a>
                </li>
                <li className="menu">
                  <a href="">Calzados</a>
                </li>
                <li className="menu">
                  <a href="">Accesorios</a>
                </li>
                <li className="menu">
                  <a href="">Prendas</a>
                </li>
              </ul>
            </div>

            <div className=" btn-nav-container">
              <div className="ingresar-btn">
                <button className="btn btn-dark">Ingresar</button>
              </div>
              <div className="btn-nav-registrate">
                <button className="btn btn-dark">Registrate</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
{
}
