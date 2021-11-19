import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);
//Falta validar que no se pueda agregar más de lo que hay en stock y que no baje de 1
  const handleOp = (simbolo) => {
    simbolo === "-" ? setContador(contador - 1) : setContador(contador + 1);
  };
  return (
    <div>
      <button onClick={() => handleOp("-")}>-</button>
      <span>{contador}</span>
      <button onClick={() => handleOp("+")}>+</button>
      <br />
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};


export default ItemCount;