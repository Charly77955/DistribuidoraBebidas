
import './App.css';
import NavBar from './pages/components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/screens/products/Products';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Inicio from './pages/screens/main/inicio';

function App() {
  return (
    <div className="App">
      
       <Router>
      <Routes>
      <NavBar/>
      <Inicio/>
        <Route path='/Productos'/><Products/><Route/>
        </Routes>
       </Router>
      
    </div>
  );
}

export default App;
