import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import Blon from "./Blon";
import "../App.css";

function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');

    if (jwtToken) {
      fetch("https://blonsport.onrender.com/auth/details", {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudieron obtener los detalles del usuario.");
          }
          return response.json();
        })
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error("Error al obtener los detalles del usuario: ", error);
        });
    }
  }, []);

  return (
    <div className="profil-container-gral">
      <h1 className="profile-title">Mi perfil</h1>
      <div className="profile-container">
        {user ? (
          <div>
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
    </div>
  );
}

export default Perfil;
