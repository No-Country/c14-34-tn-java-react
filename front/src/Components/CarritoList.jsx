import { useState } from "react";
import axios from "axios";
import React, { useEffect } from "react";



function CarritoList(){
    const [items, setItems] = useState([]);
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
    useEffect(() => {
        
        CarritoItemList();
      }, []);

return(
   <div className="carritoList-Container" >
   <h1 className="carritoList-title">Mi Carrito</h1>
   {items.length === 0 ? (
    <p>No hay productos en el carrito</p>
   ): (items.map((item) => (
                <div key={item.id} className="carritoList-card">
                    <button className="carritoList-btn">X</button>
                    <p>Producto: {item.product.name}</p>
                    <p>Precio: ${item.product.price}</p>
                    <p>Color: {item.product.color}</p>
                    {item.product.size ? <p>Talla: {item.product.size}</p> : null}
                    <p>Cantidad: {item.amount}</p>
                </div>
            )))}
            <button className="carritoList-btn">Comprar</button>
   </div>
);










}





















export default CarritoList