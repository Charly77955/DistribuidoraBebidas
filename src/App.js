
import './App.css';
import NavBar from './pages/components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllProducts from './pages/components/products/allProducts';

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <AllProducts/>
      </>
    </div>
  );
}

export default App;
