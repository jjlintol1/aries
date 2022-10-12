import React from 'react';

import arrow2 from '../../constants/arrow2.png';
import arrow4 from '../../constants/arrow4.png';

import Line from '../../constants/Line.png';

import './Jobs.css';

const jobsAvailable = [
  {
    company: "Kawaski",
    role: "Sales Intern - Right Hand to the COO",
    details: "Internship - Paris @agronavo - marketing",
    divider: true
  },
  {
    company: "Cypher",
    role: "head of growth - medical device startup",
    details: "full time - remote - business develepoment",
    divider: true
  },
  {
    company: "Ordix",
    role: "Software Developer - Robot Systems",
    details: "full time - remote - Software",
    divider: false
  }
]

const jobCategories = [
  "Business development",
  "Data Science",
  "Finance",
  "Human Resources",
  "Operations",
  "Software",
  "Marketing"
]

const JobPosting = ({ company, role, details, divider }) => (
  <div className="jobposting">
    <div className="jobposting__container">
      <div className="jobposting__text">
        <div className="jobposting__company">
          <p>{company}</p>
        </div>
        <div className="jobposting__title">
          <h3 className="h3__title">{role}</h3>
        </div>
        <div className="jobposting__details">
          <p className="bodytext__16">{details}</p>
        </div>
      </div>
      <div className="jobposting__arrow">
        <img src={arrow2} alt="arrow" className="nonhover" />
        <img src={arrow4} alt="arrow" className="hover" />
      </div>
    </div>
    {divider && <img src={Line} alt="divider" className="jobs__divider" />}
  </div>
)

const Category = ({category}) => (
  <div className="job__category">
    <div className="job__category-title">
      <h5 className="h5__title">{category}</h5>
    </div>
    <div className="job__category-arrow">
      <img src={arrow2} alt="arrow" className="nonhover" />
      <img src={arrow4} alt="arrow" className="hover" />
    </div>
  </div>
)

const Jobs = () => {
  return (
    <div className="app__jobs section__padding" id="jobs">
      <img src={Line} alt="divider" className="jobs__divider" />
      <h2 className="h2__title">Latest Portfolio Jobs</h2>
      <div className="app__jobs-content">
        <div className="app__jobs-available">
          {jobsAvailable.map((item, index) => (
            <JobPosting key={index} company={item.company} role={item.role} details={item.details} divider={item.divider} />
          ))}
        </div>
        <div className="app__jobs-categories">
          <div className="app__jobs-categories_title">
            <h4 className="h4__title">Job Categories</h4>
          </div>
          <div className="app__jobs-categories_content">
            {jobCategories.map((item, index) => (
              <Category key={index} category={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="app__jobs-button">
        <button type="button">Next Jobs</button>
        <img src={arrow2} alt="arrow" className="nonhover" />
        <img src={arrow4} alt="arrow" className="hover" />
      </div>
    </div>
  )
}

export default Jobs
