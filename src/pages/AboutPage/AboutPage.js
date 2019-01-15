import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '../../components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary, textSecondary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
            <span className="highlight">My name is Rick Knowlton and I grew up in rural Pennsylvania. I’ve lived in Philadelphia, Baltimore, and Boston, but currently Portsmouth, NH is where I call home.</span>
            </p>
            <p>
            <span className="highlight">I’ve had a curiosity for how things work for as long as I can remember. While I’m very good at breaking things, I’m a little better at putting them back together, making them work faster and more efficient than before.</span>
            </p>
            <p>
            <span className="highlight">If there is one thing that drives me as a developer, it’s design; the user experience is paramount. Some may call me a bit of a perfectionist, but I wear that as a badge of honor. I feel a little bit of extra effort and elbow grease goes a long way.</span>
            </p>
            <p>
            <span className="highlight">This portfolio site is perhaps a good example of that. I built it from scratch and used a blend of technologies to get to the end result. React, Redux, Node, JSX, SASS and a variety of packages were all used in production, but also plain old vanilla JavaScript and HTML (which can’t go unmentioned).</span>
            </p>
            <p>
            <span className="highlight">I am a constant learner and am always experimenting and tinkering with the newest technologies and frameworks. It’s not just a hobby - it’s a passion.</span>
            </p>

          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
