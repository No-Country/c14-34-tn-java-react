import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0">&copy; 2023 Company, Inc</p>
          <Link
            to={"/"}
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
          </Link>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to={"/"} className="nav-link px-2">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/productos"} className="nav-link px-2 ">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/T&C"} className="nav-link px-2 ">
                T&C.
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/FAQs"} className="nav-link px-2 ">
                FAQs
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
