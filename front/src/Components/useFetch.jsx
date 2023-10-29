import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        setData(data.content);
        setCargando(false);
    })
    .catch(error => {
      console.error('Error al cargar los datos:', error);
      setCargando(false);
    });
}, []);

  return { data, cargando };
}
