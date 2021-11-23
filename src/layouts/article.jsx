import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import { getCompetitionSlug, getTitle } from '../helpers/utils';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkParse from 'remark-parse';
import remarkFixGuillemets from 'remark-fix-guillemets';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { components } from '../helpers/CodeBlocks';
import 'katex/dist/katex.min.css';

const ArticlePage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, rawMarkdownBody: md } = markdownRemark;
  const competitionSlug = getCompetitionSlug(frontmatter.slug);
  const title = getTitle(competitionSlug);

  return (
    <div>
      <div className='bg-gray-900 min-h-screen'>
        <Header siteTitle={title} />
        <div className='container mx-auto md:px-5'>
          <div className='p-6 md:px-20'>
            <div className='pb-2 mb-4 relative'>
              <Link to={competitionSlug}>
                <h1 className='text-3xl font-bold text-cnc-yellow'>
                  {frontmatter.title}
                </h1>
              </Link>
              <div
                className='absolute bottom-0 w-48 h-1 bg-hmif-yellow'
                style={{ content: '' }}
              />
            </div>
            <ReactMarkdown
              className='font-description text-white'
              children={md}
              remarkPlugins={[remarkParse, remarkGfm, remarkMath, remarkFixGuillemets]}
              rehypePlugins={[rehypeKatex, rehypeRaw]}
              components={components}
            />
            <Link to={competitionSlug}>
              <h1 className='text-xl bg-gray-800 p-2 text-center mt-2 font-bold text-cnc-yellow rounded-xl'>
                See other {title} materials!
              </h1>
            </Link>
          </div>
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
    }
  }
`;
