import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(["http://18.220.229.238/products/show"]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Aquí debes incluir la URL como una dependencia en el array de dependencias
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.content);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
        setCargando(false);
      });
  }, [url]); // Debes incluir "url" como una dependencia

  return { data, cargando };
}
