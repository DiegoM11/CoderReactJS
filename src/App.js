import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemDetailContainer from './containers/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
