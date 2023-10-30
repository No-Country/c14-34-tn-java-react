import Contador from "./Contador";

// eslint-disable-next-line react/prop-types
export const ProductDetail = ({
  id,
  name,
  UrlImg,
  price,
  description,
  color,
  size,
  stock,
}) => {
  return (
    <div className="detail-container-gral">
      <h1 className="detail-title">Detalle del Producto</h1>
      <div className="detail-container">
        <div key={id}>
          <h2 className="detail-name">{name}</h2>
          <div className="detail-grid">
            <img className="detail-img" src={UrlImg} alt={name} />

            <span className="detail-span">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quos architecto porro deserunt obcaecati quaerat quae, non
              nesciunt praesentium atque maiores ipsa reiciendis ut assumenda
              veniam sint, voluptatem, illum explicabo.
            </span>
          </div>

          <div className="detail-detail">
            <h3 className="detail-descriptions">{description}</h3>
            <p className="detail-color">{color}</p>

            <p className="detail-size">{/* <b>{size}</b> */}</p>
            <h3 className="detail-price">Precio: ${price}</h3>
            <Contador stock={stock} />
            <button className="detail-addToCars">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};
