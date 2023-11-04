import Carrito from "./Carrito";
import { useState } from "react";
import axios from "axios";

export const ProductDetail = ({
  id,
  name,
  UrlImg,
  price,
  description,
  color,
  size,
  stock,
}) =>  {
  const [amount, setAmount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };

  const addToCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const productData = {
        id,
        amount
      };

      const response = await axios.post(
        "https://blonsport.onrender.com/shoppingCart/addProduct",
        productData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        openModal("Producto agregado al carrito");
      } 
    } catch (error) {
      console.error("Error al realizar la solicitud", error);
    }
  };


{
  return (
   
    <div className="detail-container-gral">
       {isModalOpen && (
      <div className="modal-cart">
        <div className="modal-cart-content">
          <p>{modalMessage}</p>
        </div>
      </div>
    )}
      <Carrito />
      <h1 className="detail-title">Detalle del Producto</h1>
      <div className="detail-container">
        <div key={id} className="detail-producto">
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

            <p className="detail-size">{<b>Talla: {size}</b>}</p>

            <h3 className="detail-price">
              <div className="price-shadow">
                <p className="price">Precio: ${price} </p>
              </div>
            </h3>
            
            <div className="contador-container">
              <div className="contador">
                <h3>Cantidad:</h3>
                <label htmlFor="cantidad"></label>
                <input
                  className="cantidad"
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  min="1"
                  max={stock}
                  step="1"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                />
              </div>
            </div>
            <div className="addToCars-container" onClick={addToCart}>
            <button className="detail-addToCars card-btn">
              Agregar al carrito
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}};
