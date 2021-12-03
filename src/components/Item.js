import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
  <div>
    <div className="container">
      <div className="row">
        <div class="card col-sm-4">
          <div className="card">
            <div className="card-body">
              <Link to= {`/${item.id}`}>
                <img src={item.pictureUrl} className="img-fluid" alt={item.title}/>
              </Link>
              <h5 className="card-title">{item.title}</h5>
            </div>
            <div className="card-footer">
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