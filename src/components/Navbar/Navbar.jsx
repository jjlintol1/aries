import React, { useState } from 'react';
import './Navbar.css';

import logo from '../../constants/logo.png';
import menu from '../../constants/menu.png';

import { MdOutlineClose } from 'react-icons/md'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-links_container1">
        <a href="#program">PROGRAM</a>
        <a href="#funding">FUNDING</a>
      </div>
      <div className="app__navbar-logo_container">
        <img src={logo} alt="logo" />
      </div>
      <div className="app__navbar-links_container2">
        <a href="#jobs">JOBS</a>
        <a href="#menu">MENU</a>
      </div>
      <div className="app__navbar-smallscreen">
        <img src={menu} alt="menu icon" style={{ width: 20, height: 20 }} onClick={() => setToggleMenu(true)} />
        {toggleMenu && 
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineClose className="overlay__close" fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_overlay-links">
              <li><a href="#program" onClick={() => setToggleMenu(false)}>PROGRAM</a></li>
              <li><a href="#funding" onClick={() => setToggleMenu(false)}>FUNDING</a></li>
              <li><a href="#jobs" onClick={() => setToggleMenu(false)}>JOBS</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>MENU</a></li>
            </ul>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
