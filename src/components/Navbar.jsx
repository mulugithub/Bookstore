import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="Navbar">
    <header>
      <nav>
        <div className="logo">Bookstore CMS</div>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/Categories"> Categories</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Navbar;
