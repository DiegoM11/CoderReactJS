import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react";

function ItemDetailContainer() {  
  const [itemDetails, setDetails] = useState([]);

  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(itemDetails), 2000);
  });
    
  useEffect(() => {
    promise.then((itemDetails) => setDetails(itemDetails))
  }, [])

  return (
    <div>
      <ItemDetail itemDetails={itemDetails}/>
    </div>
  );
}

export default ItemDetailContainer;
