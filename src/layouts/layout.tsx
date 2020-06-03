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

interface HomeLayoutProps {
  children?: React.ReactNode;
}

export default class HomeLayout extends Component<HomeLayoutProps> {
  render() {
    return (
      <>
        <div className="bg-white">
          <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-row w-full">
              <div className="flex flex-col justify-center items-center w-full">
                <div className="relative">
                  <div
                    className="font-heading text-hmif-yellow leading-none"
                    style={{ width: '512px', fontSize: '90px' }}
                  >
                    Compete with HMIF!
                  </div>
                  <div
                    className="absolute left-0 w-64 border-4 border-hmif-yellow"
                    style={{ content: '', bottom: '-10px' }}
                  />
                </div>
                <div className="mt-8">
                  <div className="text-lg font-sans" style={{ width: '512px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="relative w-full h-screen">
                <LazyLoadedImage />
                <div
                  className="absolute w-full h-full top-0 right-0"
                  style={{
                    background:
                      'radial-gradient(ellipse at top right, rgba(240,240,240,0.5018207966780462) 20%, rgba(240,240,240,1) 70%)',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6">
            <main>{this.props.children}</main>
          </div>
        </div>
      </>
    );
  }
}
