import React from 'react';
import { useLocation } from 'react-router-dom';

function FinalizarCompra() {
  const location = useLocation();
  const { items } = location.state;
  const calculateTotal = (item) => {
    const subtotal = item.product.price * item.amount;
    const iva = subtotal * 0.12; // IVA del 12%
    const total = subtotal + iva;
    return total;
  };
  const totalAmount = items.reduce((acc, item) => acc + calculateTotal(item), 0);

  return (
    <div className='finalizarCompra-container'>
      <h1>Detalles de la Compra</h1>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>SubTotal</th>
            <th>Cantidad</th>
            <th>IVA(%12)</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.product.name}</td>
              <td>${item.product.price}</td>
              <td>{item.amount}</td>
              <td>${(calculateTotal(item) - item.product.price).toFixed(2)}</td>
              <td>${calculateTotal(item).toFixed(2)}</td>
            </tr>
          ))}
            <tr>
            <td colSpan="4">Total de la Compra</td>
            <td>${totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className='finalizar-button'>
      <button>Finalizar Compra</button> 
      </div>
    </div>
  );
}

export default FinalizarCompra;
