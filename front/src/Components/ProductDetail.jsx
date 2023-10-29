import Contador from "./Contador";

export const ProductDetail = ({ id, name, UrlImg, price, description, color, size, stock}) => {
  return (
    <div key={id}>
      <h2>{name}</h2>
      <img src={UrlImg} alt={name}/>
      <h3>{description}</h3>
      <p>{color}</p>
      <p><b>{size}</b></p>
      <h3>Precio: ${price}</h3>
      <Contador stock={stock}/> 
      <button>Agregar al carrito</button>
    </div>
  );
}
