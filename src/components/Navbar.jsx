import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';

const Navbar = () => (
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
      <div className="user-icon oval"><FaUser /></div>
    </nav>
  </header>
);

export default Navbar;
