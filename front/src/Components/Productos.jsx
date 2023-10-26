import useFetch from "./useFetch";
import "../App.css";

function Productos() {
  const { data, cargando} = useFetch("http://18.220.229.238/products/show?page=3");

  return (
    <div>
      <h1>Lista de Productos</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-general">
          {data.map(product => (
            <div key={product.id} className="card">
              <div className="card-img">
                <img src={product.UrlImg} alt={product.name} />
              </div>
              <h2 className="card-title">{product.name}</h2>
              <p className="card-sub-title">Precio: ${product.price}</p>
              <p className="card-info">Descripción: {product.description}</p>
              <button className="card-btn">Detalles</button>
            </div>              
          ))}
        </div>
      )}
    </div>
  );
}

export default Productos;
