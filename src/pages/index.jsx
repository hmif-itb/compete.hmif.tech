import React, { Component } from 'react';
import Icon from '@mdi/react';
import { Link } from 'gatsby';

import HomeLayout from '../layouts/home';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <HomeLayout>
      <SEO title="Compete" />
    </HomeLayout>
  );
};

export default IndexPage;
