import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function FinalizarCompra() {

  const location = useLocation();
  const { items } = location.state;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState('');
  const [address, setAddress] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(''); 
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const calculateTotal = (item) => {
    const subtotal = item.product.price * item.amount;
    const iva = subtotal * 0.12; // IVA del 12%
    const total = subtotal + iva;
    return total;
  };
  const totalAmount = items.reduce((acc, item) => acc + calculateTotal(item), 0);


  
  const handlePurchase = async () => {
    const token = localStorage.getItem('token');
    if (paymentType === ('Tarjeta de Débito')) {
      setPaymentType("DEBIT_CARD")
    }
    if(paymentType === ('Tarjeta de Crédito')) {
      setPaymentType("CREDIT_CARD")
    }
  
    console.log(paymentType)
    if (!paymentType) {
      alert('Por favor selecciona un tipo de pago.');
      return;
    }

    if (  !address || !phoneNumber) {
      alert('Por favor completa todos los campos.');
      return;
    }

    try {
      const responsePurchase = await axios.post('http://18.220.229.238/FinalPurchase/buy', {
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentType : `${paymentType}`
        }),
      
      });

      if (!responsePurchase.status === 201) {
        
        throw new Error('No se pudo procesar la compra. buy');
      }

      
      const responseUpdateFacturationInfo = await axios.put('http://18.220.229.238/user/updateFacturationInfo', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          phoneNumber
        }),
      });

      if (!responseUpdateFacturationInfo.ok) {
        throw new Error('No se pudo actualizar la información de facturación.');
      }


      setIsModalOpen(false);
      alert('Compra exitosa');
    } catch (error) {
      console.error('Error al procesar la compra:', error);
      alert('Ocurrió un error al procesar la compra. Por favor, inténtalo de nuevo más tarde.');
    }
  };


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
      <div>
      <button className='card-btn' onClick = {openModal}>Finalizar Compra</button> 
      </div>
      {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>
              &times;
            </span>
            <h2>Información de pago</h2>
            <div className='form-group'>
              <label>Tipo de Pago:</label>
              <select
                value={paymentType}
                onChange={(e) => setPaymentType(e.target.value)}
              >
                <option value=''>Selecciona el tipo de pago</option>
                <option >Tarjeta de Débito</option>
                <option >Tarjeta de Crédito</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Número de Tarjeta:</label>
              <input
                type='text'
                placeholder ="XXXX XXXX XXXX XXXX"
               
              />
            </div>
            <div className='form-group'>
              <label>Dirección:</label>
              <input
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Número de Teléfono:</label>
              <input
                type='text'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button onClick={handlePurchase}>Confirmar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinalizarCompra;
