import React, { useEffect, useState } from 'react'
import { getItems } from '../services/getItems'   
import ItemList from '../components/ItemList';

const ItemListContainer = () => {
    
  const [products, setItems] = useState([]);

  useEffect( ()=> {
    
      (async () => {
        const { data } = await getItems();
        setItems(data);
        console.log(data);
      })();
  }, []);

  return (
      <>
      <ItemList products={products}/>
      </>
  )
}

export default ItemListContainer;

