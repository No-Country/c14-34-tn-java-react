import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Compras() {
  const [purchases, setPurchases] = useState([]);
  const [selectedPurchases, setSelectedPurchases] = useState([]);
  const [selectedPurchaseIndex, setSelectedPurchaseIndex] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get('http://18.220.229.238/FinalPurchase/user', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          setPurchases(response.data);
        } catch (error) {
          console.error('Error al obtener la lista de compras', error);
        }
      }
    };

    fetchData();
  }, [token]);

  const openModal = async (index) => {
   
    try {
        const response = await axios.get(`http://18.220.229.238/FinalPurchaseDetail/${purchases[index].id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw new Error('No se pudieron obtener los detalles de la compra.');
      } else {
        
        setSelectedPurchases(response.data);
        setSelectedPurchaseIndex(index);
        
      }
    } catch (error) {
      console.error('Error al obtener detalles de la compra', error);
    }
  };

  const closeModal = () => {
    setSelectedPurchaseIndex(null);
  };

console.log(selectedPurchaseIndex)
console.log(selectedPurchases)
  return (
    <div className="compras-container">
      <h1 className="compras-title">Mis compras</h1>
      {purchases.length === 0 ? (
        <p>No hay compras disponibles.</p>
      ) : (
        purchases.map((purchase, index) => (
          <div key={purchase.id} className="purchase-card">
            <h2 className='purchase-date'>Fecha: {purchase.date.substring(0, 10)}</h2>
            <p className='purchase-paymentType'>Tipo de pago: {purchase.paymentType}</p>
            <p className='purchase-subTotal'>Sub total: ${purchase.subtotal.toFixed(2)}</p>
            <p className='purchase-iva'>IVA: ${purchase.iva.toFixed(2)}</p>
            <p className='purchase-total'>Total: ${purchase.total.toFixed(2)}</p>
            <button className="card-btn" onClick={() => {openModal(index);}}>Detalles</button>
          </div>
        ))
      )}

{selectedPurchases[selectedPurchaseIndex] && (selectedPurchases.map(details =>
  <div className="modal">
    <div className="modal-content">
      <button className="modal-close-btn" onClick={closeModal}>X</button>
      <h2 className="modal-title">Detalles de la Compra</h2>
      <div className="modal-details">
        <div className="modal-text">
          <p><strong>Nombre del producto:</strong> {details[selectedPurchaseIndex].product.name}</p>
          <p><strong>Precio del producto:</strong> ${details[selectedPurchaseIndex].product.price}</p>
          <p><strong>Cantidad:</strong> {details[selectedPurchaseIndex].amount}</p>
          <p><strong>Fecha:</strong> {details[selectedPurchaseIndex].finalPurchase.date.substring(0, 10)}</p>
          <p><strong>Tipo de pago:</strong> {details[selectedPurchaseIndex].finalPurchase.paymentType}</p>
          <p><strong>Subtotal:</strong> ${details[selectedPurchaseIndex].finalPurchase.subtotal.toFixed(2)}</p>
          <p><strong>IVA:</strong> ${details[selectedPurchaseIndex].finalPurchase.iva.toFixed(2)}</p>
          <p><strong>Total:</strong> ${details[selectedPurchaseIndex].finalPurchase.total.toFixed(2)}</p>
        </div>
        <div className="modal-image">
          <img src={details[selectedPurchaseIndex].product.urlImg} alt={details[selectedPurchaseIndex].product.name} />
        </div>
      </div>
    </div>
  </div>
))}


    </div>
  );
}

export default Compras;
