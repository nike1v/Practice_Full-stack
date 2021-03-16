import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import '../../assets/header.css';
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
        <NavLink to="/logOut" className="navButton logOut">Log Out</NavLink>
      </nav>

      <Switch>
        <Route path="/contacts">
          
        </Route>
        <Route path="/cart">
          
        </Route>
        <Route path="/logOut">
          
        </Route>
      </Switch>
    </header>
  )
}

export default Header;