import './App.css';
import React from 'react';
import NavBar from  './components/NavBar';
import Home from './containers/Home';
import Cart from './containers/Cart';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter as Router,
         Routes,
         Route
         } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

