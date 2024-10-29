import "./App.css";
import NavBar from "./pages/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/screens/products/Products";

import Inicio from "./pages/screens/main/inicio";
import Carrousel from "./pages/components/carrousel/carrousel";

function App() {
  return (
    <div className="App">
      <>
        <div className="container">
          <div className="cajas carousel">
            carousel
          </div>
          <div className="cajas productos">Productos</div>
          <div className="cajas filters">Filters</div>
          <div className="cajas footer">footer</div>
        </div>
      </>
    </div>
  );
}

export default App;
