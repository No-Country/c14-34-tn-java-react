import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Secciones</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="#Index-component"
                  className="nav-link p-0 text-body-secondary"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Productos
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contactanos
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Politica de Privacidad
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Atencion al Cliente
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribete a Nuestra Pagina</h5>
              <p>
                Subscribete para recibir Noticias, Novedades y las mejores
                Ofertas
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <button className="btn btn-primary" type="button">
                  Subscribirse
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          id="F-container"
          className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
        >
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use linkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use linkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width="24" height="24">
                  <use linkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
