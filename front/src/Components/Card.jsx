import React from "react";

function Card() {
  return (
    <div className="card-general">
      <div className="card-titles">
        <h2 className="card-h2">Elegir Nuestros Productos</h2>
        <h5 className="card-h5">La Eleccion Perfecta</h5>
      </div>
      {/* zapatillas NIKE*/}
      <div className="card">
        <div className="card-img">
          <img src="src\img\zapatillas\zapatillas05.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Nike</h1>
          <p className="card-sub-title">Zapatillas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* Zapatillas Adiddas */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\zapatillas\zapatillas01.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Addidas</h1>
          <p className="card-sub-title">Zapatillas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* REMERAS */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\rememras\remera01.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Remeras</h1>
          <p className="card-sub-title">Addidas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* REMERAS */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\rememras\remera02.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Remera</h1>
          <p className="card-sub-title">Nike</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* CONJUNTOS */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\conjuntos\conjunto02.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Nike</h1>
          <p className="card-sub-title">Conjuntos</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* CONJUNTOS */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\conjuntos\conjunto05.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Addidas</h1>
          <p className="card-sub-title">Conjuntos</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* CONJUNTOS */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\conjuntos\conjunto06.jpg" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Varios</h1>
          <p className="card-sub-title">Conjuntos</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* PANTALONES */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\pantalosnes-calzas\images (1).jfif" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Nike</h1>
          <p className="card-sub-title">Zapatillas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* PANTALONES */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\pantalosnes-calzas\descarga (2).jfif" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Nike</h1>
          <p className="card-sub-title">Zapatillas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
      {/* ACCESORIOS */}
      <div className="card">
        <div className="card-img">
          <img src="src\img\pantalosnes-calzas\images (1).jfif" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Nike</h1>
          <p className="card-sub-title">Zapatillas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-img">
          <img src="src\img\pantalosnes-calzas\images (1).jfif" alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title">Nike</h1>
          <p className="card-sub-title">Zapatillas</p>
          <p className="card-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            distinctio optio quisquam inventore ea illum quis magni! Minima ea
            alias sint at vitae inventore reiciendis.
          </p>
          <button className="card-btn">Detalles</button>
          <div className="card-cars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
