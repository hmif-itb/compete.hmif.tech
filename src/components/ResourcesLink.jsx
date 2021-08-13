import React from 'react';
import { GiMaterialsScience } from 'react-icons/gi';

const ResourcesLink = ({ links }) => {
  if (links === null || links.length === 0) {
    return null;
  }
  return (
    <>
      <div
        className='flex flex-row justify-center font-heading items-center text-hmif-yellow text-2xl font-bold text-center'>
        <GiMaterialsScience />
        <div className='px-2 text-2xl '>Other Useful Links!</div>
        <GiMaterialsScience />
      </div>
      <div className='mb-8 flex flex-col justify-center items-center'>
        {links.map(({ name, link }) => {
          return <a className='text-xl w-full md:w-2/3 bg-gray-800 rounded-xl p-2 text-center mt-3 text-blue-300 font-bold'
                    href={link} target='_blank' rel='noreferrer'>{name}</a>;
        })}
      </div>
    </>
  );
};

export default ResourcesLink;
