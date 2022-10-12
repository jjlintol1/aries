import React from 'react';

import funding1 from '../../constants/funding1.png';
import funding2 from '../../constants/funding2.png';
import funding3 from '../../constants/funding3.png';
import funding4 from '../../constants/funding4.png';

import arrow4 from '../../constants/arrow4.png';
import arrow3 from '../../constants/arrow3.png';
import Line from '../../constants/Line.png';

import atomin from '../../constants/atomin.png';
import cypher from '../../constants/cypher.png';
import jarvice from '../../constants/jarvice.png';
import kawaski from '../../constants/kawaski.png';
import oracle from '../../constants/oracle.png';
import ordix from '../../constants/ordix.png';
import raxon from '../../constants/raxon.png';
import tindo from '../../constants/tindo.png';

import './Investments.css';

const Project = ({ title, heading, text }) => (
  <>
    <div className="project__title">
      <p>{title}</p>
    </div>
    <div className="project__heading">
      <h3 className="h3__title">{heading}</h3>
    </div>
    <div className="project__text">
      <p className="bodytext__16">{text}</p>
    </div>
    <div className="project__button">
      <button type="button">View Project</button>
      <img src={arrow3} alt="arrow" className="nonhover" /> 
      <img src={arrow4} alt="arrow" className="hover" /> 
    </div>
  </>
)

const Investment = ({logo, name}) => (
  <div className={`investment__container`}>
    <img src={logo} alt="logo" />
    <h4>{name}</h4>
  </div>
)

const Investments = () => {
  return (
    <div className="app__investments section__padding" id="funding">
      <div className="app__investments-content">
        <div className="app__investments-heading">
          <div className="app__investments-heading_title">
            <h2 className="h2__title">We invest $27 Billion<br />per year into AI startups.</h2>
          </div>
          <div className="app__investments-heading_content">
            <p className="bodytext__16">They are showing researches and writting regularly about the consequnces happening on AI. Our unique program is designed for startups, combining hands-on help from a deeply experienced product development team and a total investment package of $270,000.</p>
          </div>
        </div>
        <div className="app__investments-row1">
          <div className="images__container">
            <img src={funding1} alt="funding" className="funding1" />
            <img src={funding2} alt="funding" className="funding2" />
          </div>
          <div className="project__container">
            <Project 
            title="KAWASKI" 
            heading="Corporobo Design Interview with Ben Lukas."
            text="We spoke to Robotic and sound designer Ben Lukas Boysen about the evolution of robot soundtracks and some of his top picks."
            />
          </div>
        </div>
        <div className="app__investments-row2">
          <div className="project__container">
            <Project
            title="ROXERIN"
            heading="Young Minds, Experience hand & Strong Command."
            text="We spoke to Robotic and sound designer Ben Lukas Boysen about the evolution of robot soundtracks and some of his top picks."
            />
          </div>
          <div className="images__container">
            <img src={funding4} alt="funding" className="funding4" />
            <img src={funding3} alt="funding" className="funding3" />
          </div>
        </div>
      </div>
      <div className="app__investments-portfolios">
        <img src={Line} alt="divider" className="portfolios__divider" />
        <h2 className="h2__title">Our Investment Portfolios</h2>
        <div className="app__portfolio-container">
          <div className="app__investments1">
            <Investment logo={atomin} name="Atomin" />
            <Investment logo={oracle} name="Oracle" />
            <Investment logo={jarvice} name="Jarvice" />
            <Investment logo={raxon} name="Raxon" />
          </div>
          <div className="app__investments2">
            <Investment logo={tindo} name="Tindo" />
            <Investment logo={kawaski} name="Kawaski" />
            <Investment logo={cypher} name="Cypher" />
            <Investment logo={ordix} name="Ordix" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investments
