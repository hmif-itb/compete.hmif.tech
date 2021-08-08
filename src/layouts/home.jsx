/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
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
      <div className='bg-black min-h-screen'>
        <Header siteTitle={'Competition and Community HMIF'} />
        <div>
          <div className='flex flex-col justify-center items-center p-6 w-full sm:mt-20 md:mt-8'>
            <div className='relative'>
              <div className='font-bold font-sans text-hmif-yellow leading-none text-4xl'>
                Compete with HMIF!
              </div>
              <div
                className='absolute left-0 w-64 border-2 border-hmif-yellow'
                style={{ content: '', bottom: '-10px' }}
              />
            </div>
            <div className='mt-10'>
              <div className='text-lg font-sans text-left md:text-center max-w-4xl text-white'>
                Bersaing adalah keseharian kami. Menjadi yang terbaik adalah
                minat kami. Di HMIF, kami mau Anda untuk berada di puncak dari
                setiap aspek kompetisi yang memungkinkan.
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto px-10'>
            <div className='text-xl font-bold text-center text-white'>
              Eksplorasi bidang-bidang ini.
            </div>
            <div className='flex flex-col md:flex-row justify-between py-3'>
              {competitions.map((comp) => {
                return (
                  <Link
                    to={comp.link}
                    key={comp.displayName}
                    className='hover-no-underline'
                  >
                    <div className='flex flex-col items-center p-6 cursor-pointer'>
                      <div>{comp.icon}</div>
                      <div className='text-hmif-yellow font-sans font-bold text-center text-lg'>
                        {comp.displayName}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
