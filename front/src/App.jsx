import { useState } from "react";

import "./App.css";
import Videobc from "./Components/Videobc";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carrusel from "./Components/Carrusel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Videobc />
      <Navbar />
      <Carrusel />
      <Footer />
    </div>
  );
}

export default App;
