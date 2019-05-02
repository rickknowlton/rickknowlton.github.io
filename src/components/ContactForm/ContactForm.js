import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';


const ContactForm = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;

  if (props.render) return props.render;
  else
    return (
        <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Contact</h1>
        <div className="contact-wrapper">
          <div className="contact-content" style={{ color: textPrimary }}>
          <div className='contact-form' style={{ backgroundColor: colorPrimary }}>
          {/* <div className='contact-form__title'>Tryna Holla?</div> */}
                <div>
                <form action="https://formspree.io/rick@teamtinymachine.com" method="POST">
                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <label>Phone</label>
                <input type="text" id="phonenumber" name="phonenumber" placeholder="Your phone number"/>
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"/>


                <label>Subject</label>
                <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
                <input type="submit" value="Fire!" style={{ backgroundColor: textPrimary, color: colorPrimary }}/>
                </form>

                </div>
          </div>
          </div>
        </div>
      </div>
    );
};

ContactForm.contextTypes = {
  theme: PropTypes.any
};

export default ContactForm;
