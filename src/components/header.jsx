import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import logoUrl from '../images/hmiftech.png';

const Header = ({ siteTitle }) => (
  <header className='container'>
    <div className='p-6 px-6 md:px-48'>
      <Link
        to='/'
        style={{
          textDecoration: `none`
        }}
      >
        <img src={logoUrl} alt='logo' width='150' />
        <div className='font-heading font-bold text-hmif-yellow leading-none text-4xl mt-6'>
          {siteTitle}
        </div>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
