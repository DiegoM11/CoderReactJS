import ItemCount from "./ItemCount";
import { useState } from "react";


function ItemDetail({product})  {
  const [count, setCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (cantidad) => {
    setCount(cantidad);
    setIsAdded(true);
    console.log(isAdded);
    console.log(count)
  };

  return(
    <div className="item-detail">
      <div className="container">
          <div className="row">
            <div class="card col-sm-4">
              <div className="card">
                <div className="card-body">
                  {console.log(product)}
                  <h5 className="card-title">{product.data.name}</h5>
                  <br/>
                  <img src={product.data.images.small} className="img-fluid" alt={product.data.name} />
                  <br/>
                  <div className="card-description">
                    <br/>
                    <ul>
                      <li>{product.data.supertype}</li>
                      <li>Subtype: {product.data.subtypes}</li>
                      <li>Type: {product.data.types}</li>
                      <li>Level: {product.data.level}</li>
                    </ul>
                  </div>
                  <div className="card-price">
                    <span>Price: $</span> {product.data.tcgplayer.prices.holofoil.market}
                  </div>
                  <br/>
                  <ItemCount handleAdd = {(cantidad) => handleAddToCart(cantidad)} />
                  <br/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail;




