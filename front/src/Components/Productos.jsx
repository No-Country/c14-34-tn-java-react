import useFetch from "./useFetch";

function Productos() {
  const { data, cargando} = useFetch("https://jsonplaceholder.typicode.com/todos/");

  return (
    <div>
      <h1>Lista de Productos</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {data.map(product => (
            <li key={product.id}>
              <h2 className="card-title">{product.name}</h2>
              <p className="card-sub-title">Precio: ${product.price}</p>
              <p className="card-info">Descripción: {product.description}</p>
              <button className="card-btn">Detalles</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Productos;
