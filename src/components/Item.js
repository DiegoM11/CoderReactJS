import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
      <div class="card col-sm-4">
        <div className="card">
          <div className="card-body">
            <Link to= {`/product/${product.id}`}>
              <img src={product.images.small} className="img-fluid" alt={product.name}/>
            </Link>
            <h5 className="card-title">{product.name}</h5>
          </div>
        </div>
      </div>
  );
}

export default Item;