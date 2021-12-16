import React, { useEffect, useState } from 'react'
//import { getItems } from '../services/getItems'   
import ItemList from '../components/ItemList';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';


const ItemListContainer = () => {
  
  const [loading, setLoading] = useState(false);
  const [products, setItems] = useState([]);

  useEffect( ()=> {

    setLoading(true);

    //Armar la referencia a la colección de productos
    const productosRef = collection(db, 'productos');

    //Obtener los productos
    getDocs(productosRef)
      .then( (snapshot) => {
        const productos = snapshot.docs.map( (doc) => ({
          id : doc.id,
          ...doc.data()       
        }) 
        )
        console.log(productos);
        setItems(productos);
      })
      .finally( () => {
        setLoading(false);
      })
    
      /*(async () => {
        const { data } = await getItems();
        setItems(data);
        console.log(data);
      })();*/
  }, []);

  return (
      <>
      {loading ? <div>Loading...</div> : <ItemList products={products} />}
      </>
  )
}

export default ItemListContainer;

