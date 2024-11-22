import "./App.css";
import NavBar from "./pages/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/screens/products/Products";

import Inicio from "./pages/screens/main/inicio";
import Carrousel from "./pages/components/carrousel/carrousel";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <>
      
        <div className="container">
        <NavBar/>
          <div className="carousel">
            carousel
          </div>
          <div className="content">
          <div className="products">Productos</div>
          <div className="filter">Filters</div>
          </div>
          <div className="footer">footer</div>
        </div>
      </>
    </div>
      </BrowserRouter>
  );
}

export default App;
