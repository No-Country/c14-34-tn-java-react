import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Productos from "./Components/Productos";
import Calzados from "./Components/Calzados";
import Accesorios from './Components/Accesorios';
import Prendas from './Components/Prendas';
import Login from './Components/Login';
import Register from './Components/Register';
import ProductDetailContainer from './Components/ProductDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />   
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/producto/:productId' element={<ProductDetailContainer />} /> 
        <Route path='/calzados' element={<Calzados />} />
        <Route path='/accesorios' element={<Accesorios />} />
        <Route path='/prendas' element={<Prendas />} />
        <Route path='/ingresar' element={<Login />} />
        <Route path='/registro' element={<Register />} />
      </Routes>
      <Footer />
      </BrowserRouter>   
    </>
  );
}

export default App;
