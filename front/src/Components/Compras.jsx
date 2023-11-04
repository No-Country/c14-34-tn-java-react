import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Compras() {
  const [purchases, setPurchases] = useState([]);
  const [selectedPurchases, setSelectedPurchases] = useState([]);
  const token = localStorage.getItem('token');
  

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get('https://blonsport.onrender.com/FinalPurchase/user', {
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

  const openModal = async (purchaseId) => {
   
    
    try {
      const response = await axios.get(`https://blonsport.onrender.com/FinalPurchaseDetail/${purchaseId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status !== 200) {
        throw Error('No se pudieron obtener los detalles de la compra.');
      }
      setSelectedPurchases(response.data);
    } catch (error) {
      console.error('Error al obtener detalles de la compra', error);
    }
  };

  const closeModal = () => {
    setSelectedPurchases([])
  };

  
  
  return (
    <div className="purchase-container">
      <h1 className="purchase-title">Mis compras</h1>
      {purchases.length === 0 ? (
        <p>No hay compras disponibles.</p>
      ) : (
        purchases.map((purchase, index) => (
          <div key={purchase.id} className="purchase-card">
            <p>Fecha: {purchase.date.substring(0, 10)}</p>
            <p>Tipo de pago: {purchase.paymentType}</p>
            <p>Subtotal: ${purchase.subtotal.toFixed(2)}</p>
            <p>IVA: ${purchase.iva.toFixed(2)}</p>
            <p>Total: ${purchase.total.toFixed(2)}</p>
            <button className="card-btn" onClick={() => { openModal(purchase.id); }}>Detalles</button>
          </div>
        ))
      )}

      {selectedPurchases.length !==0 && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>X</button>
            <h2 className="modal-title">Detalles de la Compra</h2>
            <div className="modal-details">
              <div className="modal-text">
                {selectedPurchases[0].products.map((product, productIndex) => (
                  <div key={productIndex}>
                    <p><strong>Producto:</strong> {product.productName}</p>
                    <p><strong>Precio:</strong> ${product.productPrice}</p>
                  </div>
                ))}
                <p><strong>Cantidad:</strong> {selectedPurchases[0].amount}</p>
                <p><strong>Fecha:</strong> {selectedPurchases[0].finalPurchases[0].date.substring(0, 10)}</p>
                <p><strong>Tipo de pago:</strong> {selectedPurchases[0].finalPurchases[0].paymentType}</p>
                <p><strong>Subtotal:</strong> ${selectedPurchases[0].finalPurchases[0].subtotal.toFixed(2)}</p>
                <p><strong>IVA:</strong> ${selectedPurchases[0].finalPurchases[0].iva.toFixed(2)}</p>
                <p><strong>Total:</strong> ${selectedPurchases[0].finalPurchases[0].total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compras;
