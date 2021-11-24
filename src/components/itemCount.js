import React, { useState } from "react";

function ItemCount ({ initial = 0, stock = 25 }) {
  const [contador, setContador] = useState(initial);
  const [nuevoStock = stock - (contador + 1), updateStock] = useState(stock);
  


  const handleOp = (simbolo) => {
    console.log(simbolo);
    if (simbolo === "+") {
      if (contador <= stock) {
        setContador(contador + 1);
        const menosStock = nuevoStock - 1;
        updateStock(menosStock);
        console.log(menosStock);
      }
    } else {
      if (contador > 0) {
        setContador(contador - 1);
        const masStock = nuevoStock + 1;
        updateStock(masStock);
        console.log(masStock);;
    }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <img src="https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2751000/altimages/ff_2751363alt2_full.jpg&w=900" className="img-fluid" alt="Milwaukee Bucks Jersey" />
              <h5 className="card-title">
                Men's Milwaukee Bucks Ray Allen Mitchell & Ness Kelly Green 1996-97 Hardwood Classics Swingman Jersey
              </h5>
              <h6>Stock: {nuevoStock}</h6>
                <div className="itemCount">
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
                    //onClick={() => handleAdd()} //Faltaria agregar funcion para que ande
                    disabled={contador === 0}
                  >
                    Agregar
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;