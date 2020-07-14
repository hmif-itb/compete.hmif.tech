import React, { Component } from 'react';
import Icon from '@mdi/react';
import { Link } from 'gatsby';

import ArticlePage from '../layouts/article';
import Image from '../components/image';
import SEO from '../components/seo';

const Article = () => {
  return (
    <>
      <SEO title="Compete" />
      <ArticlePage />
    </>
  );
};

export default Article;
