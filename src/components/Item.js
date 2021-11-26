import ItemCount from "./ItemCount";

function Item({ item }) {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <img src={item.pictureUrl} className="img-fluid" alt={item.title} />
              <h5 className="card-title">
                  {item.id} - {item.title}
              </h5>
              <p className="card-price">
                <span>$</span> {item.price}
              </p>
              <button className="btn btn-primary">Ver detalle</button>
              <ItemCount/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Item;