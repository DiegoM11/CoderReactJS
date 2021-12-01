import ItemCount from "./ItemCount";

function Item({ item }) {
  return (
  <div>
    <div className="container">
      <div className="row">
        <div class="card col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                  {item.id} - {item.title}
              </h5>
            </div>  
              <ItemCount/>  
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Item;