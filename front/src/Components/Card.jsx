import { Link } from "react-router-dom";
import "../App.css";
import Blon from "./Blon";
import ImgPrincipal from "./ImgPrincipal";
import Carrito from "./Carrito";

function Card() {
  return (
    <>
      <ImgPrincipal />
      <Blon />
      <Carrito />
      <div className="card-general">
        {/* Calzado*/}
        <div className="card">
          <div className="card-img">
            <img src="https://i.postimg.cc/28pgCMMS/zapatillas05.webp" alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">Zapatillas</h1>
            <p className="card-sub-title">Calzado</p>
            <p className="card-info">
              Ingresa a Nuestros Catalogos y encontra las mejores Zapatillas del
              Mercado al Mejor Precio
            </p>
            <Link to={`/calzados`}>
              <button className="card-btn BtnC">Detalles</button>
            </Link>
          </div>
        </div>

        {/* REMERAS */}
        <div className="card">
          <div className="card-img">
            <img src="https://i.postimg.cc/L4jN3XQm/remera02.webp" alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">Remeras</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              La Mejor Calidad y Variedad en Prendas de todos los Talles para la
              Dama y el Caballero
            </p>
            <Link to={`/prendas`}>
              <button className="card-btn BtnC ">Detalles</button>
            </Link>
          </div>
        </div>
        {/* CONJUNTOS */}
        <div className="card">
          <div className="card-img">
            <img src="https://i.postimg.cc/7ZR3k8tB/conjunto05.jpg" alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">Conjuntos</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              Variedad en Colores y Los Mas Atractivos Conjuntos.
            </p>
            <Link to={`/prendas`}>
              <button className="card-btn BtnC">Detalles</button>
            </Link>
          </div>
        </div>
        {/* Accesorios */}
        <div className="card">
          <div className="card-img">
            <img
              src="https://i.postimg.cc/C1GkkZht/conjunto02.webp"
              alt="Conjunto de Dama"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">Indumentaria</h1>
            <p className="card-sub-title">Accesorios</p>
            <p className="card-info">
              Amplio Stock en Accesorios Deportivos Ingresa y encontra el tuyo
            </p>
            <Link to={`/accesorios`}>
              <button className="card-btn BtnC ">Detalles</button>
            </Link>
          </div>
        </div>

        {/* PANTALONES */}
        <div className="card">
          <div className="card-img">
            <img
              src="https://i.postimg.cc/0jt60DLt/pantalones-8.webp"
              alt="Pantalones"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">Pantalones</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              Encontra aca el que mas Te guste y arma tu pedido con un click
            </p>
            <Link to={`/prendas`}>
              <button className="card-btn BtnC">Detalles</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img
              src="https://i.postimg.cc/RVyhCS9n/conjunto08.webp"
              alt="Conjunto de Hombre"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">Pantalones</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              Encontra aca el que mas Te guste y arma tu pedido con un click
            </p>
            <Link to={`/prendas`}>
              <button className="card-btn BtnC">Detalles</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
