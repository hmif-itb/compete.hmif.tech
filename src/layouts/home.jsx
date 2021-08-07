/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';
// import PropTypes from 'prop-types';
// import { useStaticQuery, graphql, Link } from 'gatsby';

import Header from '../components/header';
// import LazyLoadedImage from '../components/image';

import DataScienceIcon from '../images/svg/data-science.svg';
import CompetitiveProgrammingIcon from '../images/svg/competitive-programming.svg';
import CaptureTheFlagIcon from '../images/svg/capture-the-flag.svg';
import GameDevelopmentIcon from '../images/svg/game-development.svg';
import UiUxIcon from '../images/svg/ui-ux.svg';

const competitions = [
  {
    link: '/ui-ux',
    displayName: 'Data Science',
    icon: <DataScienceIcon width='110' height='110' />
  },
  {
    link: '/competitive-programming',
    displayName: 'Competitive Programming',
    icon: <CompetitiveProgrammingIcon width='110' height='110' />
  },
  {
    link: '/competitive-programming',
    displayName: 'Capture the Flag',
    icon: <CaptureTheFlagIcon width='110' height='110' />
  },
  {
    link: '/competitive-programming',
    displayName: 'Game Development',
    icon: <GameDevelopmentIcon width='110' height='110' />
  },
  {
    link: '/ui-ux',
    displayName: 'UI/UX Competition',
    icon: <UiUxIcon width='110' height='110' />
  }
];

const HomeLayout = () => {
  return (
    <>
      <div className='bg-white relative'>
        <div className='min-h-screen'>
          <Header />
          <div className='flex flex-col justify-center items-center w-full p-6 mt-8 sm:mt-20 md:mt-32'>
            <div className='relative'>
              <div className='font-heading font-bold text-hmif-yellow leading-none text-4xl'>
                Compete with HMIF!
              </div>
              <div
                className='absolute left-0 w-64 border-2 border-hmif-yellow'
                style={{ content: '', bottom: '-10px' }}
              />
            </div>
            <div className='mt-8'>
              <div className='text-lg font-sans text-left md:text-center max-w-4xl'>
                Bersaing adalah keseharian kami. Menjadi yang terbaik adalah
                minat kami. Di HMIF, kami mau Anda untuk berada di puncak dari
                setiap aspek kompetisi yang memungkinkan.
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-6'>
          <main>
            <div className='text-xl font-bold text-center'>
              Eksplorasi bidang-bidang ini.
            </div>
            <div className='flex flex-col md:flex-row justify-between py-10'>
              {competitions.map((comp) => {
                return (
                  <Link
                    to={comp.link}
                    key={comp.displayName}
                    className='hover-no-underline'
                  >
                    <div className='flex flex-col items-center p-4 cursor-pointer'>
                      <div>{comp.icon}</div>
                      <div className='italic text-hmif-yellow text-center text-lg'>
                        {comp.displayName}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </main>
        </div>
      </div>
      {/* <div className="relative w-full h-screen">
        <LazyLoadedImage />
        <div
          className="absolute w-full h-full top-0 right-0"
          style={{
            background:
              'radial-gradient(ellipse at top right, rgba(240,240,240,0.5018207966780462) 20%, rgba(240,240,240,1) 70%)',
          }}
        />
      </div> */}
    </>
  );
};

export default HomeLayout;
