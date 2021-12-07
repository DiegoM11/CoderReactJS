import React, { useState } from "react";
import { Link } from "react-router-dom";


function ItemCount ({ initial = 0, stock = 25, handleAdd, handleBuy}) {
  const [contador, setContador] = useState(initial);
  const [nuevoStock = stock - (contador + 1), updateStock] = useState(stock);
  


  const handleOp = (simbolo) => {
    console.log(simbolo);
    if (simbolo === "+") {
      if (contador <= stock) {
        setContador(contador + 1);
        const masStock = nuevoStock - 1;
        updateStock(masStock);
        console.log(masStock);
      }
    } else {
      if (contador > 0) {
        setContador(contador - 1);
        const menosStock = nuevoStock + 1;
        updateStock(menosStock);
        console.log(menosStock);;
    }
    }
  };

  return (
    <div className="itemCount">
      <div className="d-flex">
        <h6>Stock: {nuevoStock}</h6>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => handleOp("-")}
        disabled={contador === 0}
      >
      -
      </button>
      <span className="count">{contador}</span>
      <button
        className="btn btn-primary"
        onClick={() => handleOp("+")}
        disabled={contador === stock}
      >
      +
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleAdd(contador)} 
        disabled={contador === 0}
      >
      Agregar al carrito
      </button>
      <Link to="/cart">
      <button
        className="btn btn-success"
        //onClick={() => handleBuy()}
        disabled={contador === 0}
      >
      Comprar
      </button>
      </Link>
    </div>
  );
};

export default ItemCount;