import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../../components/ContactForm';
import ScrollToPrevious from '../../components/ScrollToPrevious';
import './style.scss';


const ContactPage = (props, context) => {
  const {
    theme: {colorHighlight, bgPrimary}
  } = context;

  return (
    <div className="contact-page" style={{ backgroundColor: bgPrimary }}>
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
    <ContactForm/>
    <div className="arrow-wrap">
      <ScrollToPrevious pageSelector=".portfolio-page" />
      </div>
    </div>
  );
};

ContactPage.contextTypes = {
  theme: PropTypes.any
};



export default ContactPage;
