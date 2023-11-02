import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const [userVisible, setUserVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setUser(null);
    setUserVisible(false);
  };

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      fetch("http://18.220.229.238/auth/details", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => response.json())
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error("Error al obtener los detalles del usuario: ", error);
        });
    }
  }, []);

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

            <div className="btn-nav-container">
              <div className="user-container">
                {user ? (
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle d-flex justify-content-start "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {user.name} {user.lastname}
                    </button>
                    <ul className="dropdown-menu text-center ">
                      <li className="UserInfoMenu">
                        <NavLink to={"/Perfil"}>Mi Perfil</NavLink>
                      </li>
                      <li className="UserInfoMenu">
                        <NavLink to={"/ListaCompras"}>Mis compras</NavLink>
                      </li>
                      <li className="UserInfoMenu">
                        <button className="cerrarSesion" onClick={handleLogout}>
                          Cerrar Sesión
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="ing-nav-btn">
                    <div className="ingresar-btn">
                      <NavLink to={"/login"} className="btn btn-dark">
                        Ingresar
                      </NavLink>
                    </div>
                    <div className="btn-nav-registrate">
                      <NavLink to={"/register"} className="btn btn-dark">
                        Regístrate
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
