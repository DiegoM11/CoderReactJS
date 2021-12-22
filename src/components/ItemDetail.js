import ItemCount from "./ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";




function ItemDetail({product})  {
  const {addToCart} = useContext(CartContext)
  const [ isAdded, setIsAdded ] = useState(false);

  const { cart } = useContext(CartContext);
  
  
  const handleAddToCart = (cantidad) => {
    console.log('aca recibi la cantidad: ', cantidad)
    setIsAdded(cantidad);
  }  

  const handleBuy = () => {
    if(!isInCart(product.id)){
      addToCart({...product, cantidad: isAdded})
    }else{
      const nuevaCantidad = cart.find(item => item.id === product.id).cantidad;
      console.log('nueva cantidad: ', nuevaCantidad)
      addToCart({...product, cantidad: nuevaCantidad + isAdded})
    }
  }

  const isInCart = (id) => {
    return cart.some(item => item.id === id)
  }

  return(
    <div className="item-detail">
      <div className="container">
          <div className="row">
            <div class="card col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <br/>
                  <img src={product.img} className="img-fluid" alt={product.name} />
                  <br/>
                  <div className="card-description">
                    <br/>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="card-price">
                    <span>Price: $</span> {product.price}
                  </div>
                  <br/>
                  
                  <br/>
                  { !isAdded ?
                  <ItemCount
                    handleAdd = {(cantidad) => handleAddToCart(cantidad)} 
                  /> :
                  <Link to="/cart">
                    <button
                      className="btn btn-success"
                      onClick={handleBuy}
                    >
                    Comprar
                    </button>
                  </Link> 
                  }
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail;





