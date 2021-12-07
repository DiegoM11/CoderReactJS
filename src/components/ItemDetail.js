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
                  <img src={product.data.images.small} className="img-fluid" alt={product.data.name} />
                  <h5 className="card-title">{product.data.name}</h5>
                  <div className="card-description">
                    <p>
                      <h6>Description</h6>
                    </p>
                  </div>
                  <div className="card-price">
                    <span>$</span> {product.data.tcgplayer.prices.holofoil.market}
                  </div>
                  <ItemCount handleAdd = {(cantidad) => handleAddToCart(cantidad)} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail;




