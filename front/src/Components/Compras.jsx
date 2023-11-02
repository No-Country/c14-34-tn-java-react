import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Compras() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://18.220.229.238/FinalPurchase/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          setPurchases(response.data);
        })
        .catch(error => {
          console.error('Error al obtener la lista de compras', error);
        });
    }
  }, []);
  
  return (
    <div>
      <h1>Lista de Compras</h1>
      {purchases.map((purchase, index) => (
        <div key={index}>
          <h2 className='purchase-date'>Fecha: {purchase.date.substring(0, 10)}</h2>
          <p className='purchase-paymentType'>Tipo de pago: {purchase.paymentType}</p>
          <p className='purchase-subTotal'>Sub total: ${purchase.subtotal.toFixed(2)}</p>
          <p className='purchase-iva'>IVA: {purchase.iva.toFixed(2)}</p>
          <p className='purchase-total'>Total: {purchase.total.toFixed(2)}</p>
          <button className="card-btn">Detalles</button>
        </div>
      ))}
    </div>
  );
}

export default Compras;
