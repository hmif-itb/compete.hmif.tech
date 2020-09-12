import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/header';
import { getCompetitionSlug, getTitle } from '../utils';

const ArticlePage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark;
  const competitionSlug = getCompetitionSlug(frontmatter.slug);
  const title = getTitle(competitionSlug);

  return (
    <div className="mx-auto">
      <Header />
      {/* <div>{tableOfContents}</div> */}
      <div className="container mx-auto">
        <div className="blog-post mb-12 px-6 md:px-20">
          <div className="pb-2 mb-4 relative">
            <Link to={competitionSlug}>
              <h1 className="text-3xl font-bold">{title}</h1>
            </Link>
            <h2 className="text-sm font-light">{frontmatter.date}</h2>
            <div
              className="absolute bottom-0 w-48 h-1 bg-hmif-yellow"
              style={{ content: '' }}
            />
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      tableOfContents
    }
  }
`;
