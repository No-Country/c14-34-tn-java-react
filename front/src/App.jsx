import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Productos from "./Components/Productos";
import Calzados from "./Components/Calzados";
import Accesorios from './Components/Accesorios';
import Prendas from './Components/Prendas';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />   
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/calzados' element={<Calzados />} />
        <Route path='/accesorios' element={<Accesorios />} />
        <Route path='/prendas' element={<Prendas />} />
      </Routes>
      <Footer />
      </BrowserRouter>   
    </>
  );
}

export default App;
