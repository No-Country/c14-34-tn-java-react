import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Carrito() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);

  const userInfo = async () => {
    try {
      const response = await axios.get(`http://18.220.229.238/auth/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      } else {
        throw new Error("No se pudieron obtener los detalles de la compra.");
      }
    } catch (error) {
      console.error("Error al obtener detalles de la compra", error);
    }
  };

  const countInfo = async (userid) => {
    try {
      const response = await axios.get(
        `http://18.220.229.238/shoppingCart/count/${userid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setCount(response.data);
      } else {
        throw new Error("No se pudieron obtener los detalles de la compra.");
      }
    } catch (error) {
      console.error("Error al obtener detalles de la compra", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await userInfo();
      if (user) {
        await countInfo(user.id);
      }
    };
    fetchData();
  }, [user]);

  return (
    <Link to={"/CarritoList"}>
      <div className="cars-container ">
        <a href="/"></a>
        <svg
          className="bi bi-cart-check"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
        <div id="cars-count">{count}</div>
      </div>
    </Link>
  );
}

export default Carrito;
