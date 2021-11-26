import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer.js';

const App = () => {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;
