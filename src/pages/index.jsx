import React from 'react';
// import Icon from '@mdi/react';
// import { Link } from 'gatsby';

import HomeLayout from '../layouts/home';
import SEO from '../components/seo';
import '../css/tailwind.css';

const IndexPage = () => {
  return (
    <HomeLayout>
      <SEO title="Compete" />
    </HomeLayout>
  );
};

export default IndexPage;
