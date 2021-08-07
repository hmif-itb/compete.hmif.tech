import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <Link
    to='/'
    style={{
      textDecoration: `none`
    }}
  >
    <header className='bg-hmif-yellow pb-5 w-full'>

      <div className='p-3 px-6 md:px-48'>
        <div className='font-heading font-bold leading-none text-4xl mt-3'>
          {siteTitle}
        </div>
      </div>
    </header>
  </Link>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
