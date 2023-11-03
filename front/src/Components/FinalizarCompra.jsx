import React from 'react';

function FinalizarCompra({items}){
    const precioTotal = items.reduce((total, item) => {
        return total + item.product.price * item.amount;
      }, 0);


      return (
        <div>
          <h2>Total del Carrito: ${precioTotal.toFixed(2)}</h2>
        </div>
      );
}


export default FinalizarCompra;