import ItemDetail from '../components/ItemDetail';
import { useState, useEffect } from "react";
import { getItem } from "../services/getItems";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [product, setProduct] = useState({})

  useEffect( () => {
      
      (async () => {
          const product = await getItem(id);
          setProduct(product);
      })()

  }, [id])

  
  console.log(product);

  return (
    <>{product.data !== undefined ? <ItemDetail product={product} /> : <div>Loading...</div>}</>
  )
}

export default ItemDetailContainer