
import './App.css';
import NavBar from './pages/components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/screens/products/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/screens/main/inicio';

function App() {
  return (
    <div className="App">
      <>
       <BrowserRouter>
       <NavBar/>
       <Inicio/>
      <Routes>
      
        <Route path='Inicio' element={<Inicio/>}/>
        <Route path='productos' element={<Products/>}/>
        </Routes>
        </BrowserRouter>
        </>
    </div>
  );
}

export default App;
