import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";


export const Checkout = () => {

  const { cart, totalAmount, emptyCart } = useContext(CartContext);

  const [ orderId, setOrderId ] = useState('');

  const [values, setValues] = useState({  
    nombre: "",
    email: "",
    tel: "",
});

  const handleInputChange = (e) => {
    console.log(e.target.name)

    setValues({
      ...values,
      [e.target.name]: e.target.value

  })
  }


  const handleSubmit = (e) => {
    e.preventDefault()

    const order = {
    buyer: values,
    items: cart,
    total: totalAmount(),
    date: Timestamp.fromDate(new Date()),
  }

  const ordersRef = collection(db, "orders")

  addDoc(ordersRef, order)
  .then((res) => {
    setOrderId(res.id)
    emptyCart()
  })
  };

  return (
    <div className="container my-5">

      {
         orderId
         ? <>
            <h1>Compra realizada!</h1>
            <hr/>
            <p>Numero de order: {orderId}</p>
            <Link to="/" className="btn btn-primary">Volver</Link>
         </>
          : <>
      
      <h2>Checkout</h2>
      <hr/>
      <form onSubmit={handleSubmit}>
        <input
        name="nombre"
        onChange={handleInputChange}
        value = {values.nombre}
        className="form-control my-2"
        type="text"
        placeholder="Nombre"
        />
        <input
        name="email"
        onChange={handleInputChange}
        value = {values.email}
        className="form-control my-2"
        type="email"
        placeholder="Email"
        />
        <input  
        name="telefono"
        onChange={handleInputChange}
        value = {values.telefono}
        className="form-control my-2"
        type="number"
        placeholder="Telefono"
        />
      <button type="submit" className="btn btn success">Enviar</button>
      </form>
      </>
}
    </div>
  );
};