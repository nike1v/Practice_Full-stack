import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../images/logo.jpg';

const Header = () => {
  return (
    <header className="header">
      <section className="logoName">
        <img src={Logo} width="50" alt="logo"/>
        <span className="logoText">GetBooks</span>
      </section>
      <nav className="headerNavigation">
        <NavLink to="/contacts" className="navButton contacts">Contacts</NavLink>
        <NavLink to="/cart" className="navButton cart">Cart</NavLink>
        <NavLink to="/logout" className="navButton logout">Log Out</NavLink>
      </nav>
    </header>
  )
}

export default Header;