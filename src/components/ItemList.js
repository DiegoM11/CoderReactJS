import Item from "./Item";

function ItemList( {items} ) {
  return (
    <div className="item-list">
      {items.map( i =>  <Item key = { i.id } item = { i } /> )}
    </div>
  );
}

export default ItemList;