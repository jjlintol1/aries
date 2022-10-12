import React from 'react';

import Line from '../../constants/Line.png';
import arrow2 from '../../constants/arrow2.png';
import arrow4 from '../../constants/arrow4.png';

import './Footer.css';


const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-content section__padding" id="menu">
        <div className="app__footer-level1">
          <div className="app__footer-cta">
            <h2 className="h2__title">we help you to turn ideas into reality.</h2>
            <p className="bodytext__16" style={{ lineHeight: '24px' }}>If your research processes have unique features, and you are looking for an individual funding solution - we can help.</p>
          </div>
          <div className="app__footer-form">
            <input type="text" placeholder="Name*" />
            <input type="email" placeholder="Email*" />
            <input type="text" placeholder="Message*" />
            <div className="app__footer-submit">
              <button type="submit">get in touch</button>
              <img src={arrow2} alt="arrow" className="nonhover" />
              <img src={arrow4} alt="arrow" className="hover" />
            </div>
          </div>
        </div>
        <div className="app__footer-links">
          <div className="app__footer-links_social">
            <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
            <a href="https://www.reddit.com/" target="_blank">Reddit</a>
            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
            <a href="https://twitter.com/" target="_blank">Twitter</a>
          </div>
          <div className="app__footer-links_privacy">
            <p>Privacy & Policy</p>
            <p>Cookies Policy</p>
          </div>
        </div>
      </div>
      <img src={Line} alt="divider" className="app__footerdivider" />
      <div className="app__footer-allrights">
        <h6 className="h6__title">all rights reserved by <span>PIXIRHY</span></h6>
      </div>
    </div>
  )
}

export default Footer
