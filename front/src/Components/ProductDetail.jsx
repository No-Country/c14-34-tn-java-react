import Contador from "./Contador";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
export const ProductDetail = ({
  id,
  name,
  UrlImg,
  price,
  description,
  color,
  size,
  stock,
}) => {
  return (
    <div className="detail-container-gral">
      <h1 className="detail-title">Detalle del Producto</h1>
      <div className="detail-container">
        <div key={id} className="contador">
          <h2 className="detail-name">{name}</h2>
          <div className="detail-grid">
            <img className="detail-img" src={UrlImg} alt={name} />

            <span className="detail-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quos architecto porro deserunt obcaecati quaerat quae, non
              nesciunt praesentium atque maiores ipsa reiciendis ut assumenda
              veniam sint, voluptatem, illum explicabo.
            </span>
          </div>

          <h3 className="detail-descriptions">{description}</h3>

          <div className="detail-detail">
            {/* <p className="detail-color">{color}</p> */}

            <div className="btn-select-colours">
              <h3 className="select-h3" id="btnCol">
                Colores disponibles:
              </h3>
              <button className="select-black" id="btnCol">
                Negro
              </button>
              <button className="select-blue" id="btnCol">
                Azul
              </button>
              <button className="select-green" id="btnCol">
                Verde
              </button>
              <button className="select-white" id="btnCol">
                Blanco
              </button>
            </div>

            <p className="detail-size">{<b>{size}</b>}</p>

            <h3 className="detail-price">
              <div className="price-shadow">
                <p className="price">Precio: ${price} </p>
              </div>
            </h3>

            {/* <Contador stock={stock} /> */}

            <div className="contador-container">
              <div className="contador">
                <h3>Cantidad:</h3>
                <label for="cantidad"></label>
                <input
                  className="cantidad"
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  min="1"
                  max="{ stock }"
                  step="1"
                />
              </div>
            </div>
          </div>
          <div className="addToCars-container">
            <button className="detail-addToCars card-btn">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
