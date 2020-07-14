import React from 'react';
import { graphql } from 'gatsby';
import '../css/article.css';

const ArticlePage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html, tableOfContents } = markdownRemark;
  return (
    <div className="container mx-auto p-6">
      <div>{tableOfContents}</div>
      <div className="blog-post">
        <div className=" pb-2 mb-4 relative">
          <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
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
