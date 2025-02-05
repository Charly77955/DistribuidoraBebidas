import "./App.css";
import NavBar from "./pages/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./pages/components/carrousel/carrousel";
import { BrowserRouter } from "react-router-dom";
import Products from "./pages/components/itemcontainer/itemsContainer";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <>
        <div className="container">
        <NavBar/>
        <nav>
          <div className="carousel">
            <Carrousel/>
          </div>
          <div className="content">
          <div className="products"><Products/></div>
          <div className="filter">Filters</div>
          </div>
          <div className="footer">footer</div>
        </nav>
        </div>
      </>
    </div>
      </BrowserRouter>
  );
}

export default App;
