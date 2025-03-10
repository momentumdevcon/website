import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Menu } from './Menu'
import logo from '../assets/images/cropped-white.svg'
import '../assets/css/logo.css'
import '../assets/css/header.css'
import circuitLogo from '../assets/circuit-logo.png'

export const Header = () => {
  const [menuState, updateMenuState] = useState(' Closed')

  const toggleMenu = () => {
    if (menuState === ' Closed') {
      return updateMenuState(' Open')
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <a href="https://www.thecircuit.net/" target="_blank" style={{ border: 'none', height: '45px' }}>
            <img src={circuitLogo} alt="logo" className="logo icon" style={{ height: '45px' }} />
          </a>
        </div>
      </div>
    </header>
  )
}
