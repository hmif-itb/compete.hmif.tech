import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import '../css/article.css';
import { getCompetitionSlug, computeEdges, getTitle } from '../helpers/utils';

const CompetitionPage = ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const { edges } = data.allMarkdownRemark;
        const path = location.pathname;
        const competitionSlug = getCompetitionSlug(path);
        const title = getTitle(competitionSlug);
        const finalEdges = computeEdges(edges, competitionSlug);
        return (
          <>
            <div className="mx-auto bg-black text-white min-h-screen">
              <SEO title={title} />
              <Header siteTitle={title} />
              <div className="container mx-auto mt-5">
                <div className="blog-post mb-12 px-6 md:px-20">
                  <div className="pb-2 mb-4 relative font-sans">
                    <h1 className="text-3xl text-cnc-yellow font-bold font-sans">
                      {title}
                    </h1>
                    <div className="text-xl font-bold">Materials:</div>
                    <ul className="mb-8">
                      {finalEdges.map((edge) => {
                        const siteData = edge.node.frontmatter;
                        return (
                          <li key={siteData.title}>
                            <Link to={siteData.slug}>
                              <span className="text-lg text-blue-400">
                                {siteData.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        );
      }}
    />
  );
};

export default CompetitionPage;
