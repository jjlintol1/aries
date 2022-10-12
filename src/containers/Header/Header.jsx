import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import arrow1 from '../../constants/arrow1.png';
import vector from '../../constants/vector.png';

import './Header.css';

const Header = () => {
  return (
    <div className="app__header section__padding">
      <Navbar />
      <div className="app__header-heading_container">
        <h1 className="h1__title">We Are Here For Your <br /> <span className="gradient__text">Artificial Intelligence</span> <br /> Startup.</h1>
      </div>
      <div className="app__header-arrow_container">
        <img src={arrow1} alt="arrow" />
      </div>
      <img className="app__header-vector" src={vector} alt="vector" />
    </div>
  )
}

export default Header
