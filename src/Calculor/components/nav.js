import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="nav-header">
    <Title />
    <div className="navbar-link">
      <NavLink to="/" className="nav-active">
        Home
      </NavLink>
      <NavLink to="/Calculator" className="nav-active">
        Calculator
      </NavLink>
      <NavLink to="/Quote" className="nav-active">
        Quote
      </NavLink>
    </div>
  </header>
);

const Title = () => (
  <>
    <h1 className="title-header">Math Magician</h1>
  </>
);

export default NavBar;
