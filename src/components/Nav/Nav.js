import React from "react";
import { Link } from 'react-router-dom'
// import * as ROUTES from '../../utils/FirebaseRoutes';

const Nav = props => (
  <nav className="navbar navbar-dark bg-primary">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="/">
          Home
        </a>
      </li>
      <li className="nav-item justify-content-center">
        <a className="nav-link disabled" href="/">
          My Catering
        </a>
      </li>
      <li className="nav-item dropdown justify-content-right">
        <a
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          href="/"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/About">
            About your Cook!
          </a>
          <a className="dropdown-item" href="PlaceOrder">
            Place Order
          </a>
          <a className="dropdown-item" href="Specials">
            Specials
          </a>
          <a className="dropdown-item" href="Recipes">
            Recipes
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="/AllDishes">
            All Dishes
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signIn">
          Sign In
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signOut">
          Sign Out
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;

// const Nav = props => (
//   <nav className="navbar navbar-dark bg-primary">
//         <ul>
//       <li>
//         <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.LANDING}>Landing</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.HOME}>Home</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.ACCOUNT}>Account</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.ADMIN}>Admin</Link>
//       </li>
    
//     </ul>
//   </nav>
// );