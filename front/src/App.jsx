import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carrusel from "./Components/Carrusel";
import Card from "./Components/Card";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Carrusel />
      <hr />
      <Card />
      <div className="login-register">
        <Login />
        <Register />
      </div>

      <Footer />
    </div>
  );
}

export default App;
