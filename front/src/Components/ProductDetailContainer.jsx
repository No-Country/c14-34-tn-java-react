import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getElementById } from "../Promesa";
import { ProductDetail } from "./ProductDetail";

const ProductDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    getElementById(productId)
      .then((response) => {
        console.log(response); // Agrega esto para depurar
        setProductos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  console.log(productos);
  return (
    <div>
      <ProductDetail {...productos} />
    </div>
  );
};

export default ProductDetailContainer;
