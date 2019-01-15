import React from 'react';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import SocialIcons from '../../components/SocialIcons';
import Nav from '../../components/Nav';
import ScrollToNext from '../../components/ScrollToNext';
import BrowserNotes from '../../components/BrowserNotes';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary, textEmphasis } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <BrowserNotes />
        <div className="intro-wrapper">
          <div className="intro-name">Hello! I'm <span style={{ color: textEmphasis }}>Rick Knowlton</span>:</div>
          <div className="intro-name">

                <Typed 
                strings={[
                    'Full-Stack Developer',
                    'Reverse Engineer',
                    'Problem Solver',
                    'Clean Code Advocate',
                    'UX/UI Enthusiast',
                    'Level 10 High Elf Sorcerer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop='true'                     
                />
            </div>

          <SocialIcons />
        </div>
      </main>
      <ScrollToNext pageSelector=".about-page" />
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
