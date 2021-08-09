import PropTypes from 'prop-types';
import React from 'react';
import '../css/footer.css';

const Footer = () => (
  <footer className='bg-hmif-yellow'>
    <div className='md:px-48'>
      <div className='font-sans italic text-center text-black py-5 leading-none'>
        Competition is a great thing, it forces us to do the best!
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
