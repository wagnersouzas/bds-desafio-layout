import { Link, NavLink } from 'react-router-dom';

import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark bg-primary main-nav">
    <div className="container-fluid">
      <Link to="/" className="nav-logo-text">
        <h4>Carros Top</h4>
      </Link>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#carrostop-navbar"
        aria-controls="carrostop-navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
    <div id="carrostop-navbar" className="collapse navbar-collapse">
      <ul className="navbar-nav offset-md-2 main-menu">
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName="active">
            Catálago
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
