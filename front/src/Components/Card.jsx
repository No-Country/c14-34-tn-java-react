import React from "react";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img src="src\img\conjuntos\conjunto02.jpg" alt="" />
        </div>

        <div className="card-p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            nemo unde nesciunt magni quasi est quisquam numquam quod expedita
            quaerat!
          </p>
        </div>
        <div className="card-btn">
          <button type="submit">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
