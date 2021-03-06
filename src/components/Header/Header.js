import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../../images/logo.jpg';
import {
  logout,
  contacts,
  cart as cartRoute,
  books,
} from '../../constants/routes';

import './header.css';

const Header = ({ cart }) => {
  const history = useHistory();
  const cartCount = cart.length;

  const handleLogoClick = () => {
    history.push(books);
  };

  return (
    <header className="header">
      <section
        className="logoName"
        onClick={handleLogoClick}
        role="button"
        tabIndex="-10">
        <img src={Logo} width="50" alt="logo" />
        <span className="logoText">GetBooks</span>
      </section>
      <nav className="headerNavigation">
        <NavLink to={contacts} className="navButton contacts">
          Contacts
        </NavLink>
        <NavLink to={cartRoute} className="navButton cart">
          Cart {cartCount > 0 && <span>{cartCount}</span>}
        </NavLink>
        <NavLink to={logout} className="navButton logout">
          Log Out
        </NavLink>
      </nav>
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = ({ booksStore }) => ({ cart: booksStore.cart });

export default connect(mapStateToProps)(Header);
