import React from 'react';

import sepline from '../../constants/sep-line.png';

import edris from '../../constants/edris.png';
import chris from '../../constants/chris.png';
import mark from '../../constants/mark.png';
import roberto from '../../constants/roberto.png';

import arrow2 from '../../constants/arrow2.png';
import arrow4 from '../../constants/arrow4.png';

import './Team.css';

const teamMembers = [{ name: "Edris Alba", image: edris, role: "Leader"},
{ name: "Chris Rogers", image: chris, role: "Lead Marketing"},
{ name: "Mark Rafello", image: mark, role: "Co - Leader"},
{ name: "Roberto Simioni", image: roberto, role: "Lead Technician"} 
];

const TeamMember = ({ name, image, role }) => (
  <div className="teammember">
    <div className="teammember__image-container">
      <img src={image} alt="team member" />
    </div>
    <div className="teammember__data">
      <h5 className="h5__title">{name}</h5>
      <p className="bodytext__16">{role}</p>
    </div>
  </div>
)

const Team = () => {
  return (
    <div className="app__team section__padding">
      <div className="app__team-members">
        {teamMembers.map((item, index) => (
          <TeamMember key={index} name={item.name} image={item.image} role={item.role} />
        ))}
      </div>
      <img src={sepline} alt="separator" className="app__team-sepline" />
      <div className="app__team-genius">
        <div className="app__team-genius_header">
          <h2 className="h2__title">Genius minds behind this program for you</h2>
        </div>
        <div className="app__team-genius_content">
          <p className="bodytext__16">We are a group of engineers, designers and entrepreneurs brought together to support early stage startups working on artificial intelligence.</p>
        </div>
        <div className="app__team-genius_button">
          <button type="button">View Team</button>
          <img src={arrow2} alt="arrow" className="nonhover" />
          <img src={arrow4} alt="arrow" className="hover" />
        </div>
      </div>
    </div>
  )
}

export default Team
