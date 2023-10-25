import ImgPrinsipal from "./Components/ImgPrinsipal";
import Card from "./Components/Card";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Productos from "./Components/Productos";
import Blon from "./Components/Blon";
import CarsButton from "./Components/CarsButton";
import Terminos from "./Components/Terminos";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <ImgPrinsipal />
      <hr />
      <Blon />
      <Card />
      <Login />
      <Register />
      <Productos />
      <Terminos />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
