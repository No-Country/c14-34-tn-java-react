import useFetch from "./useFetch";
import Blon from "./Blon";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Productos() {

  const [currentPage, setCurrentPage] = useState(0);


  const { data, cargando } = useFetch(
    `http://18.220.229.238/products/show?page=${currentPage}`
  );
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = [0, 1, 2, 3, 4];
  
  return (
    <div>
      <h1>Lista de Productos</h1>
      <Blon />
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-general">
          {data.map((product) => (
            <div key={product.id} className="card">
              <div className="card-img">
                <img src={product.UrlImg} alt={product.name} />
              </div>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-sub-title">Precio: ${product.price}</p>
                <p className="card-info">Descripción: {product.description}</p>
                <Link to={`/producto/${product.id}`}>
                  <button className="card-btn">
                    Detalles
                  </button>
                </Link>
              </div>
            </div>
          ))}

      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 0}
        >
          Anterior
        </button>
        {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
        <button onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>
      </div>


        </div>
      )}
    </div>
  );
}

export default Productos;

