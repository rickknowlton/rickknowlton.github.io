import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = (props, context) => {
  const { theme: { textPrimary, colorHighlight } } = context;
  return (
    <footer>
      <div className="content-grid">
      <style jsx="true">
        {`
          .highlight {
            color: ${textPrimary};
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
        <div><span className="highlight">Crafted with <span role="img" aria-label="heart">❤️</span> by <a href="https://github.com/rickknowlton" target="_blank" rel="noopener noreferrer"> Rick Knowlton</a></span></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;

