
import useFetch from "./Components/useFetch";

import "./App.css";

function App() {

  const { data, cargando } = useFetch('https://c14-34-tn-java-react-production.up.railway.app/products/show');

  return (
    <div>
      {/* <Videobc />
      <Navbar />
      <Carrusel />
      <Footer /> */}
      <h1>Lista de Productos</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className="card-container">
          {data.map(product => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.UrlImg} alt={product.name}/>
              <p>Precio: ${product.price}</p>
              <p>Descripción: {product.description}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
