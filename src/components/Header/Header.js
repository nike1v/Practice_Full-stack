import React from 'react';
import '../../assets/header.css';
import Logo from '../../images/logo.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="logoName">
        <img src={Logo} width="50" alt="logo"/>
        <span className="logoText">GetBooks</span>
      </div>
      <div className="navigation">

      </div>
    </div>
  )
}

export default Header;