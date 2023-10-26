import "../App.css";
import ImgPrisipal from './ImgPrinsipal'

function Card() {
  return (
    <>
      <ImgPrisipal />
      <div className="card-general">
        {/* Calzado*/}
        <div className="card">
          <div className="card-img">
            <img src="src\img\zapatillas\zapatillas05.webp" alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">Zapatillas</h1>
            <p className="card-sub-title">Calzado</p>
            <p className="card-info">
              Ingresa a Nuestros Catalogos y encontra las mejores Zapatillas del
              Mercado al Mejor Precio
            </p>
            <button className="card-btn">Detalles</button>
          </div>
        </div>

        {/* REMERAS */}
        <div className="card">
          <div className="card-img">
            <img src="src\img\rememras\remera02.webp" alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">Remeras</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              La Mejor Calidad y Variedad en Prendas de todos los Talles para la
              Dama y el Caballero
            </p>
            <button className="card-btn">Detalles</button>
          </div>
        </div>
        {/* CONJUNTOS */}
        <div className="card">
          <div className="card-img">
            <img src="src\img\conjuntos\conjunto05.jpg" alt="" />
          </div>
          <div className="card-body">
            <h1 className="card-title">Conjuntos</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              Variedad en Colores y Los Mas Atractivos Conjuntos.
            </p>
            <button className="card-btn">Detalles</button>
          </div>
        </div>
        {/* Accesorios */}
        <div className="card">
          <div className="card-img">
            <img
              src="src\img\conjuntos\conjunto02.webp"
              alt="Conjunto de Dama"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">Indumentaria</h1>
            <p className="card-sub-title">Accesorios</p>
            <p className="card-info">
              Amplio Stock en Accesorios Deportivos Ingresa y encopntra el tuyo
            </p>
            <button className="card-btn">Detalles</button>
          </div>
        </div>

        {/* PANTALONES */}
        <div className="card">
          <div className="card-img">
            <img
              src="src\img\pantalosnes-calzas\pantalones (8).webp"
              alt="Pantalones"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">Pantalones</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              Encontra aca el que mas Te guste y arma tu pedido con un click
            </p>
            <button className="card-btn">Detalles</button>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img
              src="src\img\conjuntos\conjunto08.webp"
              alt="Conjunto de Hombre"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">Pantalones</h1>
            <p className="card-sub-title">Prendas</p>
            <p className="card-info">
              Encontra aca el que mas Te guste y arma tu pedido con un click
            </p>
            <button className="card-btn">Detalles</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
