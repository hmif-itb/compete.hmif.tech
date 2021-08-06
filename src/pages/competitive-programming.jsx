import React from 'react';
import CompetitionPage from '../layouts/competition';

export default ({ location }) => <CompetitionPage slug="/competitive-programming" location = { location }/>;

// import React from 'react';
// import { graphql, Link } from 'gatsby';
// import Header from '../components/header';
// import SEO from '../components/seo';
// import useSitePath from '../hooks/useSiteMetaData';
// import { getCompetitionSlug, computeEdges, getTitle } from '../utils';

// const Competition = ({ data }) => {
//   console.log(data);
//   const { edges } = data.allMarkdownRemark;
//   const path = useSitePath();
//   const competitionSlug = getCompetitionSlug(path);
//   const title = getTitle(competitionSlug);
//   const finalEdges = computeEdges(edges, competitionSlug);

//   return (
//     <div className="mx-auto">
//       <SEO title={title} />
//       <Header />
//       <div className="container mx-auto">
//         <div className="blog-post mb-12 px-6 md:px-20">
//           <div className="pb-2 mb-4 relative">
//             <h1 className="text-3xl font-bold">{title}</h1>
//             {finalEdges.map((edge) => {
//               const siteData = edge.node.frontmatter;
//               return (
//                 <Link to={siteData.slug}>
//                   <h3 className="text-lg">{siteData.title}</h3>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Competition;

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             slug
//             title
//           }
//         }
//       }
//     }
//   }
// `;
