import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import Blon from './Blon';
import '../App.css';

function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      fetch('http://18.220.229.238/auth/details', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('No se pudieron obtener los detalles del usuario.');
          }
          return response.json();
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error('Error al obtener los detalles del usuario: ', error);
        });
    }
  }, []);

  return (
    <div className="profile-container">
      {user ? (
        <div>
          <h1 className="profile-title">Mi perfil</h1>
          <Blon />
          <div className="profile-general">
            <div className="profile">
              <div className="profile-body">
                <h2 className="profile-name">
                  Nombre y apellido: {user.name} {user.lastname}
                </h2>
                <p className="profile-email">Email: {user.email}</p>
                <p className="profile-age">Edad: {user.age}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Perfil;
