/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import LazyLoadedImage from '../components/image';
import '../css/tailwind.css';

import DataScienceIcon from '../images/svg/data-science.svg';
import CompetitiveProgrammingIcon from '../images/svg/competitive-programming.svg';
import CaptureTheFlagIcon from '../images/svg/capture-the-flag.svg';
import GameDevelopmentIcon from '../images/svg/game-development.svg';
import UiUxIcon from '../images/svg/ui-ux.svg';

const competitions = [
  {
    displayName: 'Data Science',
    icon: <DataScienceIcon width="110" height="110" />,
  },
  {
    displayName: 'Competitive Programming',
    icon: <CompetitiveProgrammingIcon width="110" height="110" />,
  },
  {
    displayName: 'Capture the Flag',
    icon: <CaptureTheFlagIcon width="110" height="110" />,
  },
  {
    displayName: 'Game Development',
    icon: <GameDevelopmentIcon width="110" height="110" />,
  },
  {
    displayName: 'UI/UX Competition',
    icon: <UiUxIcon width="110" height="110" />,
  },
];

const HomeLayout = () => {
  return (
    <>
      <div className="bg-white p-6 relative">
        <div className="flex flex-col justify-center items-center w-full min-h-screen">
          <div className="flex flex-col justify-center items-center w-full">
            <div className="relative">
              <div className="font-heading text-hmif-yellow leading-none text-4xl">
                Compete with HMIF!
              </div>
              <div
                className="absolute left-0 w-64 border-2 border-hmif-yellow"
                style={{ content: '', bottom: '-10px' }}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="text-lg font-sans">
              Bersaing adalah keseharian kami. Menjadi yang terbaik adalah minat
              kami. Di HMIF, kami mau Anda untuk berada di puncak dari setiap
              aspek kompetisi yang memungkinkan.
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <main>
            <div className="text-xl font-bold text-center">
              Eksplorasi bidang-bidang ini.
            </div>
            <div className="flex flex-col items-center">
              {competitions.map((comp) => {
                return (
                  <div className="flex flex-col items-center p-4">
                    <div>{comp.icon}</div>
                    <div className="italic text-hmif-yellow">
                      {comp.displayName}
                    </div>
                  </div>
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
