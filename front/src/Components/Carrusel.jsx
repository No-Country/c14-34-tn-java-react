import React from "react";

function Carrusel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src\img\conjuntos\conjunto03.jpg"
              className="d-block w-100"
              alt="Conjuntos"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Stock en Conjuntos de Primeras Marcas</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eius enim dicta aliquam mollitia possimus commodi totam
                consectetur ratione earum.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\img\pantalosnes-calzas\pantalones01.jpg"
              className="d-block w-100"
              alt="Pantalones"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Todos los Talles en Pantalones</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eius enim dicta aliquam mollitia possimus commodi totam
                consectetur ratione earum.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\img\zapatillas\zapatillas05.jpg"
              className="d-block w-100"
              alt="Zapatillas."
            />
            <div className="carousel-caption d-none d-md-block ">
              <h5 className="carrusel-title-Zapatillas">
                Las Mejores Zapatillas del Mercado
              </h5>
              <p className="carrusel-p-zapatillas">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt eius enim dicta aliquam mollitia possimus commodi totam
                consectetur ratione earum.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
