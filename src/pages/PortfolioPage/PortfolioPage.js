import React from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../../components/PortfolioItem';
import ScrollToPrevious from '../../components/ScrollToPrevious';
import ScrollToNext from '../../components/ScrollToNext';
import portfolioItems from './portfolio-items';

import './style.scss';

const PortfolioPage = (props, context) => {
  const {
    theme: { colorPrimary, colorAlternate, textAlternate, bgPrimary }
  } = context;

  return (
    <div className="portfolio-page" style={{ backgroundColor: bgPrimary }}>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Portfolio</h1>
        <div className="portfolio-wrapper">
          <style jsx="true">
            {`
              .portfolio-item {
                background-color: ${colorPrimary};
                color: ${textAlternate};
              }
              .portfolio-item a {
                color: ${textAlternate};
              }
              .portfolio-item__links a:hover {
                border-bottom: 2px solid ${colorAlternate};
              }
            `}
          </style>
          {/* <PortfolioItem /> */}
          {portfolioItems.map((item, i) => (
            <PortfolioItem render={item.render} key={i} />
          ))}
        </div>
      </div>
<div className="arrow-wrap">      
      <ScrollToPrevious pageSelector=".about-page" />
      <ScrollToNext pageSelector=".contact-page" />
    </div>
  
  </div>
  );
};

PortfolioPage.contextTypes = {
  theme: PropTypes.any
};

export default PortfolioPage;
