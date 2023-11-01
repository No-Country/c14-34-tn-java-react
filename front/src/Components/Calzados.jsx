import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import Blon from "./Blon";
import Carrito from "./Carrito";

function Calzados() {
  const { data, cargando } = useFetch("http://18.220.229.238/products/Zapatos");

  return (
    <div>
      <h1 className="products-title">Calzados</h1>
      <Blon />
      <Carrito />
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-general ">
          {data.map((product) => (
            <div key={product.id} className="card">
              <div className="card-img img-config">
                <img src={product.UrlImg} alt={product.name} />
              </div>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-sub-title">Precio: ${product.price}</p>
                <p className="card-info">Descripción: {product.description}</p>
                <Link to={`/producto/${product.id}`}>
                  <button className="card-btn">Detalles</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calzados;
