import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import TotalCarrito from "./TotalCarrito";
import { useNavigate } from "react-router-dom";

function CarritoList() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const openModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
        setTimeout(() => {
        setIsModalOpen(false);
        }, 1000);

      };
      const handleComprar = () => {
        navigate('/finalizarCompra', { state: { items } });
      }


      const CarritoItemList = async()=> {
        try{
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://18.220.229.238/shoppingCart`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
              if(response.status === 200){
                setItems(response.data)
              }else{
                throw new Error('No se pudieron obtener los detalles del carrito');
              }


        }catch(error){
            console.error('Error al obtener detalles de la compra', error);
        }
    }
    const deleteItem = async(itemId)=> {
        console.log(itemId)
        try{
            const token = localStorage.getItem('token');
            const response = await axios.delete(`http://18.220.229.238/shoppingCart/detele/${itemId}`, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              })
              if(response.status === 200){
                openModal("Eliminado con exito")
                CarritoItemList()
              }else{
                throw new Error('No se pudo eliminar');
              }


        }catch(error){
            console.error('Error al eliminar', error);
        }
    }



    useEffect(() => {
        
        CarritoItemList();
      }, []);


  return (
    <div className="carritoList-Container" >
    {isModalOpen && (
   <div className="modal-cart">
     <div className="modal-cart-content">
       <p>{modalMessage}</p>
     </div>
   </div>
 )}
    <div className="carrito-container-gral">
      <div className="carritoList-Container">
        <div className="carrito-title-container">
          <h1 className="carritoList-title">Mi Carrito</h1>
        </div>
        {items.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="carritoList-card">
              <div className="carritoList-x">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  clasName="bi bi-x-square"
                  viewBox="0 0 16 16"
                  onClick={() => {deleteItem(item.id);}}
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <p>Producto: {item.product.name}</p>
              <p>Precio: ${item.product.price}</p>
              <p>Color: {item.product.color}</p>
              {item.product.size ? <p>Talla: {item.product.size}</p> : null}
              <p>Cantidad: {item.amount}</p>
            </div>
          ))
        )}
          <TotalCarrito items={items} />
        {items.length > 0 && <button className="carritoList-btn" onClick={handleComprar} >Comprar</button>}
       
      </div>    
    </div>
    </div>
  );
}




export default CarritoList
