import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([
    {
        id: 1,
        title: "Charmander - 46/102 - Common 1st Edition",
        price: 96.99,
        pictureUrl: "https://img.pokemondb.net/artwork/charmander.jpg",
    },
    {
        id: 2,
        title: "Squirtle - 63/102 - Common 1st Edition",
        price: 112.99,
        pictureUrl: "https://img.pokemondb.net/artwork/squirtle.jpg",
    },
    {
        id: 3,
        title: "Bulbasaur - 44/102 - Common 1st Edition",
        price: 439.99,
        pictureUrl: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    },
    {
        id: 4,
        title: "Pikachu - 58/102 - Common 1st Edition",
        price: 179.99,
        pictureUrl: "https://img.pokemondb.net/artwork/pikachu.jpg",
    },
    {
        id: 5,
        title: "Eevee - 51/64 - Common 1st Edition",
        price: 7.99,
        pictureUrl: "https://img.pokemondb.net/artwork/eevee.jpg",
    },
    {
        id: 6,
        title: "Meowth - 56/64 - Common 1st Edition",
        price: 1.48,
        pictureUrl: "https://img.pokemondb.net/artwork/meowth.jpg",
    },
    
  ]);

  useEffect(() => {
    console.log("ItemListContainer");
  }, [items]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
