import React  from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../../images/logo.jpg';
import { logout, contacts, cart } from '../../constants/routes.js';

import './header.css';

const Header = ({ cartSize }) => {

  const cartCount = cartSize.length;

  return (
    <header className="header">
      <section className="logoName">
        <img src={Logo} width="50" alt="logo" />
        <span className="logoText">GetBooks</span>
      </section>
      <nav className="headerNavigation">
        <NavLink to={contacts} className="navButton contacts">Contacts</NavLink>
        <NavLink to={cart} className="navButton cart">Cart {cartCount > 0 && <span>{cartCount}</span>}</NavLink>
        <NavLink to={logout} className="navButton logout">Log Out</NavLink>
      </nav>
    </header>
  )
}

Header.propTypes = {
  cartSize: PropTypes.arrayOf(PropTypes.number),
}

const mapStateToProps = ({ booksStore }) => ({ cartSize: booksStore.cart })

export default connect(
  mapStateToProps,
)(Header);