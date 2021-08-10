import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import { getCompetitionSlug, getTitle } from '../helpers/utils';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { components } from '../helpers/CodeBlocks';
import 'katex/dist/katex.min.css';

const ArticlePage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, rawMarkdownBody: md } = markdownRemark;
  const competitionSlug = getCompetitionSlug(frontmatter.slug);
  const title = getTitle(competitionSlug);

  return (
    <div className="bg-black min-h-full">
      <Header siteTitle={title} />
      <div className="container mx-auto mt-5 mb-5 lg:px-10">
        <div className="blog-post mb-12 px-6 md:px-20">
          <div className="pb-2 mb-4 relative">
            <Link to={competitionSlug}>
              <h1 className="text-3xl font-bold text-cnc-yellow">
                {frontmatter.title}
              </h1>
            </Link>
            <div
              className="absolute bottom-0 w-48 h-1 bg-hmif-yellow"
              style={{ content: '' }}
            />
          </div>
          <ReactMarkdown
            className="font-description text-white"
            children={md}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={components}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      rawMarkdownBody
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      tableOfContents
    }
  }
`;
