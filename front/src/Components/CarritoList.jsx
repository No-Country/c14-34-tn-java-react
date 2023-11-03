import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";
import FinalizarCompra from "./FinalizarCompra";



function CarritoList(){
    const [items, setItems] = useState([]);
    const [showTotal, setShowTotal] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const openModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
        setTimeout(() => {
        setIsModalOpen(false);
        }, 1000);

      };
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

return(
    <div className="carritoList-Container" >
    {isModalOpen && (
   <div className="modal-cart">
     <div className="modal-cart-content">
       <p>{modalMessage}</p>
     </div>
   </div>
 )}
    
   
   <h1 className="carritoList-title">Mi Carrito</h1>
   {items.length === 0 ? (
    <p>No hay productos en el carrito</p>
   ): (items.map((item) => (
                <div key={item.id} className="carritoList-card">
                    <button className="carritoList-btn" onClick={() => {deleteItem(item.id);}}>X</button>
                    <p>Producto: {item.product.name}</p>
                    <p>Precio: ${item.product.price}</p>
                    <p>Color: {item.product.color}</p>
                    {item.product.size ? <p>Talla: {item.product.size}</p> : null}
                    <p>Cantidad: {item.amount}</p>
                </div>
            )))}
            {items.length > 0 && <button className="carritoList-btn" onClick={() => setShowTotal(true)} >Comprar</button>}
   </div>
);
}

export default CarritoList