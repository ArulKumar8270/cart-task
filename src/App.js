import './App.css';
import Header from './Components/Header-Component';
import CartPage from './Components/Cart-Components';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductList from './Components/Product-Components';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element = {<ProductList />} />
        <Route path='/Cart' element ={ <CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
