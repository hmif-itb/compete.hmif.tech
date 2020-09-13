import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Header from '../components/header';
import SEO from '../components/seo';
import '../css/article.css';
// import useSitePath from '../hooks/useSiteMetaData';
import { getCompetitionSlug, computeEdges, getTitle } from '../utils';

const CompetitionPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                html
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
        const path = window.location.pathname;
        const competitionSlug = getCompetitionSlug(path);
        const title = getTitle(competitionSlug);
        const finalEdges = computeEdges(edges, competitionSlug);
        return (
          <div className="mx-auto">
            <SEO title={title} />
            <Header />
            <div className="container mx-auto">
              <div className="blog-post mb-12 px-6 md:px-20">
                <div className="pb-2 mb-4 relative">
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <div className="text-xl">Table of content</div>
                  <ol className="mb-8">
                    {finalEdges.map((edge) => {
                      const siteData = edge.node.frontmatter;
                      return (
                        <li key={siteData.title}>
                          <Link to={siteData.slug}>
                            <span className="text-lg">{siteData.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                  <hr className="mb-4" />
                  {finalEdges.map((edge) => {
                    const html = edge.node.html;
                    return (
                      <div className="mb-8">
                        <p
                          className="index-content"
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default CompetitionPage;
