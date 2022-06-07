import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetalils from './components/ProductDetalils';

const App = () => {
  const [cart, setCart] = useState([])
  // A function that adds a product to the cart if it is not already in the cart
  // if it is already in the cart, it will increase the quantity by 1

  const addToCart = (id) => {
    const newCart = [...cart];
    const product = newCart.find(p => p.id === id);
    if (product) {
      product.quantity += 1;
    } else {
      newCart.push({id, quantity:1});
    }
    setCart(newCart);
  }
  
  // Get cart from LocalStorage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Set cart in LocalStorage whenever it changes
  useEffect(() => {
    if (cart.length) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);  
  

  return (
    <Router>
    <div className='App'>
      <Header cart={cart} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<ProductList />}>
          </Route>
          <Route path='/:id' element={<ProductDetalils addToCart={addToCart} />}>
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
};

export default App;
