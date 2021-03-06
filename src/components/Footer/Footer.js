import React from 'react';
import { NavLink } from 'react-router-dom';

import { login } from '../../constants/routes';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <nav className="footerNavigation">
      <NavLink to="/" className="nav privacy">
        Privacy
      </NavLink>
      <NavLink to="/" className="nav terms">
        Terms
      </NavLink>
    </nav>
    <section className="companyName">
      GetBooks <span>2021 GetBooks inc.</span>
    </section>
    <nav className="footerNavigation">
      <NavLink to="/" className="nav support">
        Support
      </NavLink>
      <NavLink to="/" className="nav signUp">
        Sign Up
      </NavLink>
      <NavLink to={login} className="nav signIn">
        Sign In
      </NavLink>
    </nav>
  </footer>
);

export default Footer;
