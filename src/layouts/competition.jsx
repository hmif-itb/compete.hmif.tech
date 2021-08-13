import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';
import '../css/article.css';
import { GiMaterialsScience } from 'react-icons/gi';
import { getCompetitionSlug, computeEdges, getTitle } from '../helpers/utils';
import CONSTANTS from '../constants';
import ResourcesLink from '../components/ResourcesLink';
import ContactPerson from '../components/ContactPerson';

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
        const { information } = CONSTANTS;
        const { contact, links } = information[competitionSlug];
        return (
          <>
            <div className='mx-auto bg-gray-900 text-white min-h-screen'>
              <SEO title={title} />
              <Header siteTitle={title} />
              <div className='container md:px-20 mx-auto mt-5'>
                <div className='blog-post mb-12 px-6 md:px-20'>
                  <div className='pb-2 mb-4 relative font-sans'>
                    <h1 className='text-3xl font-bold text-center text-cnc-yellow font-sans'>
                      {title}
                    </h1>
                    <div>
                      <div
                        className='flex flex-row justify-center font-heading items-center text-xl font-bold text-center text-hmif-yellow'>
                        <GiMaterialsScience />
                        <div className='px-2 text-2xl'>Materials</div>
                        <GiMaterialsScience />
                      </div>
                      <div className='mb-8 md:flex md:flex-col justify-center items-center '>
                        {finalEdges.map((edge) => {
                          const siteData = edge.node.frontmatter;
                          return (
                            <div className='text-xl md:w-2/3 bg-gray-800 rounded-xl p-2
                                            focus:text-hmif-yellow text-center mt-3 font-bold'
                                 key={siteData.title}>
                              <Link to={siteData.slug}>
                              <span>
                                {siteData.title}
                              </span>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <ResourcesLink links={links} />
                  <ContactPerson contact={contact} />
                </div>
                <div className='items-center justify-center flex flex-row'>
                  <Link to='/#explore'>
                    <button className='text-xl bg-gray-800
                    p-3 text-center mt-2 font-bold text-cnc-yellow rounded'>
                      {'Explore other Competitions!'}
                    </button>
                  </Link>
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
