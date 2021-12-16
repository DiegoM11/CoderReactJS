import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
          <div class="col">
            <div class="card shadow-sm">
                <img src={product.img} className="img-thumbnai" alt={product.name}/>            
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">${product.price}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <Link to= {`/product/${product.id}`}>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Ver detalles</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
}

export default Item;


