import React, { useRef } from 'react';

import Line from '../../constants/Line.png';
import arrow2 from '../../constants/arrow2.png';
import arrow4 from '../../constants/arrow4.png';

import article1 from '../../constants/article1.png';
import article2 from '../../constants/article2.png';
import article3 from '../../constants/article3.png';

import './Stories.css';

const articles = [
  {
    image: article1,
    title: "VCs And Startups Consider HaaS Model For Consumer Devices.",
    date: "10-08-2021"
  },
  {
    image: article2,
    title: "Covid-19 Is Rapidly Accelerating Digital Health Adoption.",
    date: "10-08-2021"
  },
  {
    image: article3,
    title: "Was our 30 Billion Dollar Investement wise on this tech?",
    date: "10-08-2021"
  }
];

const Stories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 498;
    } else {
      current.scrollLeft += 498;
    }
  }
  
  return (
    <div className="app__stories section__padding">
      <img src={Line} alt="divider" className="app__storiesdivider" />
      <h2 className="h2__title">insight, resources & stories</h2>
      <div className="app__stories-container" ref={scrollRef}>
        {articles.map((article, index) => (
          <div className="app__stories-article" key={index}>
            <div className="app__stories-article_image">
              <img src={article.image} alt="cover" />
            </div>
            <div className="app__stories-article_content">
              <p className="bodytext__16">{article.date}</p>
              <h3 className="h3__title">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="app__stories-arrows">
        <div className="app__stories-viewmore">
          <button type="button">View All Insights</button>
          <img src={arrow2} alt="arrow" className="nonhover" />
          <img src={arrow4} alt="arrow" className="hover" />
        </div>
        <div className="app__stories-scroller">
          <img src={arrow2} className="reverse nonhover" alt="scroll" onClick={() => scroll('left')} />
          <img src={arrow2} alt="scroll" onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Stories
