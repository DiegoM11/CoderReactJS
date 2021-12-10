import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
<main class="py-5 text-center container">
<div class="album py-5 bg-light">
<div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col">
      <div class="card shadow-sm">
        <img src={product.images.small} className="img-fluid" alt={product.name}/>
        <div class="card-body">
          <h5 className="card-title">{product.name}</h5>
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
  </div>
</div>
</div>
</main>
  );
}

export default Item;


