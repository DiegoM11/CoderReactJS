function ItemDetail(items) {
  return(
    <div>
      <button className="btn btn-primary" onClick={() => verMas()}>Ver detalle</button>
      <div className="container">
          <div className="row">
            <div class="card col-sm-4">
              <div className="card">
                <div className="card-body">
                  <img src={items.pictureUrl} className="img-fluid" alt={items.title} />
                  <div className="card-title">
                    <p>
                      {items.description}
                    </p>
                  </div>
                  <div className="card-price">
                    <span>$</span> {items.price}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

function verMas(items) {
  let mostrar = document.getElementById(items.id);
  if (mostrar.style.display === "none") {
    mostrar.style.display = "block";
  } else {
    mostrar.style.display = "none";
  }
  window.onload = function() {
    verMas();
  }
}

export default ItemDetail;


