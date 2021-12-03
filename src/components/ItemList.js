import Item from "./Item";

function ItemList( {items} ) {
  return (
    <div className="item-list">
      {items.map(item => {
          return <Item item = { item } key = { item.id }/>
      })}
    </div>
  );
}

export default ItemList;