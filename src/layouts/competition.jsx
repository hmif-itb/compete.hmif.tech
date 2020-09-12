import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Header from '../components/header';
import SEO from '../components/seo';
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
        console.log(path);
        // const path = useSitePath(props);
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
                  {finalEdges.map((edge) => {
                    const siteData = edge.node.frontmatter;
                    return (
                      <Link to={siteData.slug} key={siteData.title}>
                        <h3 className="text-lg">{siteData.title}</h3>
                      </Link>
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
