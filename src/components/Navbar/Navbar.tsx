import React from 'react'
import { Link } from 'react-router-dom';
import NavbarStyles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={NavbarStyles.navbar}>
      <h1>Good Burger</h1>

      <ul className={NavbarStyles.navbarLinkContainer}>
        <li className={NavbarStyles.navbarLink}>
          <Link to="/">Product List</Link>
        </li>
        <li className={NavbarStyles.navbarLink}>
          <Link to="/orders">Orders History</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar