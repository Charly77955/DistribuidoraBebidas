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
      <div className="parent">
        
        <div className="div1"><Carrousel/></div>
    <div className="div2"><Products/></div>
    <div className="div3">Filters</div>
    <div className="div4">4</div>
       </div>
       </>
        </div>
        
  );
}

export default App;
