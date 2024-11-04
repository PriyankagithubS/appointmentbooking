import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left */}
            <div>
                <img className='md-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Healthcare is a platform for doctors and patients to connect and manage their appointments</p>
            </div>
            {/* center */}
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* right */}
            <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9876543210</li>
                    <li>medico@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/* copy */}
            <hr />
            <p className='py-5 text-sm text-center'>© 2024 Medico. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer