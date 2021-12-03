import ItemCount from "./ItemCount";


function ItemDetail( {item} ) {
  return(
    <div className="Itemdetail">
      <div className="container">
          <div className="row">
            <div class="card col-sm-4">
              <div className="card">
                <div className="card-body">
                  <img src={item.pictureUrl} className="img-fluid" alt={item.title} />
                  <h5 className="card-title">{item.title}</h5>
                  <div className="card-description">
                    <p>
                      {item.description}
                    </p>
                  </div>
                  <div className="card-price">
                    <span>$</span> {item.price}
                  </div>
                  <ItemCount/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ItemDetail;


