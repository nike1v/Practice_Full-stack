import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../assets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footerNavigation">
        <NavLink to="/" className="nav privacy">Privacy</NavLink>
        <NavLink to="/" className="nav terms">Terms</NavLink>
      </nav>
      <section className="companyName">
        <span>GetBooks</span> 2021 GetBooks inc.
      </section>
      <nav className="footerNavigation">
        <NavLink to="/" className="nav support">Support</NavLink>
        <NavLink to="/" className="nav signUp">Sign Up</NavLink>
        <NavLink to="/" className="nav signIn">Sign In</NavLink>
      </nav>
    </footer>
  )
}

export default Footer;