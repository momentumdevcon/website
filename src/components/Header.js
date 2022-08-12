import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu } from './Menu';
import logo from '../assets/images/cropped-white.svg';
import '../assets/css/logo.css';
import '../assets/css/header.css';

export const Header = () => {
  const [menuState, updateMenuState] = useState(' Closed')
  
  const toggleMenu = () => {
    if (menuState === ' Closed') {
      return updateMenuState(' Open');
    }
    return updateMenuState(' Closed')
  }

  return (
    <header id="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div id="hamburger-menu" className={menuState} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Menu menuState={menuState} />
    </header>
  );
}
