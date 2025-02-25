import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  { id: 'car_alessia', name: 'Carteras' },
  { id: 'accesorio', name: 'Accesorios' },
  { id: 'gafas', name: 'Gafas' },
];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {categories.map(category => (
              <li key={category.id} className="nav-item">
                <Link className="nav-link" to={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/checkout">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
