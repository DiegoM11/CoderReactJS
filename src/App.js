import './App.css';
import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './containers/ItemListContainer.js';
import ItemCount from './components/itemCount';

const App = () => {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greetings="Bienvenidos a NBA Store!"/>
        <ItemCount/>
    </div>
  );
}

export default App;
