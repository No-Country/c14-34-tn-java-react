import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carrusel from "./Components/Carrusel";
import Card from "./Components/Card";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Productos from "./Components/Productos";
import Blon from "./Components/Blon";
import CarsButton from "./Components/CarsButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-gral">
      <Navbar />
      {/* <CarsButton /> */}
      <Carrusel />
      <hr />
      <Blon />
      <Card />

      <Login />
      <Register />

      <Productos />
      <Footer />
    </div>
  );
}

export default App;
