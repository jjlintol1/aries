import React from 'react';

import programimg from '../../constants/programimg.png';
import programright from '../../constants/programright.png';
import arrow2 from '../../constants/arrow2.png';
import arrow4 from '../../constants/arrow4.png';

import './Program.css';

const Program = () => {
  return (
    <div className="app__program section__padding" id="program">
      <div className="app__program-image_container">
        <img src={programimg} alt="program" className="main__img" />
        <img src={programright} alt="program" className="right__img" />
      </div>
      <div className="app__program-content">
        <div className="app__program-content_heading">
          <h2 className="h2__title">building faster,<br /> smarter, together.</h2>
        </div>
        <div className="app__program-content_text">
          <p className="bodytext__16">ARIES is a part of PIXIRHY, a global venture capital firm providing <br />multi stage investment to develop and scale our founders’ big <br />ideas. SOSV invests in every HAX program startup with <br />follow-on through pre-iPO.</p>
        </div>
        <div className="app__program-content_button">
          <button type="button" className="app__program-content_button-text">View Program</button>
          <img src={arrow2} alt="button arrow" className="nonhover" />
          <img src={arrow4} alt="button arrow" className="hover" />
        </div>
      </div>
    </div>
  )
}

export default Program
