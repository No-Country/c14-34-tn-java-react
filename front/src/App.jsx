import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Productos from "./Components/Productos";
import Calzados from "./Components/Calzados";
import Accesorios from "./Components/Accesorios";
import Prendas from "./Components/Prendas";
import Terminos from "./Components/Terminos";
import Faqs from "./Components/Faqs";
import Blon from "./Components/Blon";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/calzados" element={<Calzados />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/prendas" element={<Prendas />} />
          <Route path="/T&C" element={<Terminos />} />
          <Route path="/FAQs" element={<Faqs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/*   <Login />
        <Register /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
