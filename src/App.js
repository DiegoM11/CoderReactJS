import './App.css';
import React from 'react';
import NavBar from  './components/NavBar';
import Home from './containers/Home';
import CartContainer from './containers/CartContainer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter as Router,
         Routes,
         Route
         } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

const App = () => {
  return (
    <div className="App">
    <CartContextProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartContainer/>}/>
        </Routes>
      </Router>
    </CartContextProvider>
    </div>
  );
}

export default App;

