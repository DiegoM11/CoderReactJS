import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer() {  
  const [item, setDetails] = useState([])

  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(item), 2000);
  });
    
  useEffect(() => {
    promise.then((item) => setDetails(item))
  }, [])

  return (
    <div>
      <ItemDetail item={item}/>
    </div>
  );
}

export default ItemDetailContainer;
