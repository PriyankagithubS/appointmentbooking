import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        ABOUT <span className='text-gray-700 font-medium'>US</span>
      </div>

      {/* About Section with Image and Text Side by Side */}
      <div className='my-10 flex flex-col md:flex-row gap-8'>
        {/* About Image */}
        <img className='rounded-lg shadow-md max-w-full md:w-1/2 h-auto' src={assets.about_image} alt='About Us' />

        {/* About Text */}
        <div className='text-lg text-gray-700 leading-relaxed md:w-1/2'>
          <p>
            Welcome to <strong>Healthcare (Medico)</strong>. We are dedicated to providing you with the best healthcare services.
          </p>
          <br />
          <p>
            Our mission is to connect you with the best healthcare professionals and facilities in your area. We strive to make your healthcare experience smooth and enjoyable. At <strong>Healthcare (Medico)</strong>, we understand that healthcare is a personal journey, and we are committed to supporting you on your path to better health.
          </p>
          <br />
          <p>
            Our team of experienced healthcare professionals and facilities are here to help you achieve the best possible outcome for your healthcare needs. We invite you to explore our website and discover the services we offer. We look forward to serving you and helping you take control of your healthcare journey.
          </p>
          <br />
          <b className='text-xl font-semibold'>Our Vision</b>
          <p>
            To be the premier destination for healthcare services, where patients can access a wide range of medical expertise, from routine check-ups to specialized treatments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
