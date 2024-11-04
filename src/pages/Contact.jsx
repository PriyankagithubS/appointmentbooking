import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        Contact <span className='text-gray-700 font-medium'>US</span>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-10'>
        {/* Contact Image */}
        <div className='md:w-1/2 flex justify-center'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        </div>

        {/* Contact Information */}
        <div className='md:w-1/2'>
          <div className='mb-4'>
            <p className='text-gray-700 font-bold'>OUR OFFICE</p>
            <p className='text-gray-500'>
              123 Main Street, City, State, ZIP Code, Country
            </p>
          </div>

          <div className='mb-4'>
            <p className='text-gray-700 font-bold'>CONTACT</p>
            <p className='text-gray-500'>
              +91 9876543210 <br />
              medico@gmail.com
            </p>
          </div>

          <div className='mb-6'>
            <p className='text-gray-700 font-bold'>Careers at MEDICO</p>
            <p className='text-gray-500'>
              Learn more about our teams and job openings
            </p>
            <button className='mt-4 bg-blue text-white py-2 px-6 rounded-md hover:bg-primary'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
