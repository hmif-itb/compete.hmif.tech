import React from 'react';
import { GiMaterialsScience } from 'react-icons/gi';

const ContactPerson = ({ contact }) => {
  const { name, number, line } = contact;
  if (name === null || number === null || line === null) {
    return null;
  }
  return (
    <>
      <div
        className='flex flex-row justify-center font-heading items-center text-hmif-yellow text-2xl font-bold text-center'>
        <GiMaterialsScience />
        <div className='px-2 text-2xl'>Contact Person</div>
        <GiMaterialsScience />
      </div>
      <div className='mb-8 flex flex-col justify-center items-center'>
        <div className='px-2 w-full md:w-2/3 text-center'>If you want to join the <b>Discord Community</b> or ask any questions
          for this competition <br /> Please contact the head of the community for this competiton!</div>
        <div className='w-full md:w-1/4 bg-gray-800 rounded-xl p-2 text-center mt-3 text-blue-200'>
        {name} <br />
        Number: {number} <br />
        LINE: {line}
       </div>
      </div>
    </>
  );
};

export default ContactPerson;