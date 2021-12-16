import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar () {

  const { productsInCart } = useContext(CartContext);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand">Pokestore</span>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Productos</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">Carrito</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-row-reverse">
          <div className="p-2">  
            <Link to="/cart" className="ml-2">
              <CartWidget />
            </Link>
          </div>
          <div className="p-2" style={{ color: "white" }}>
            {productsInCart()}
          </div>  
        </div>
      </nav>
      <div>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;










