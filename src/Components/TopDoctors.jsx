import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate=useNavigate()
  const {doctors}=useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-semibold'>Our Top Doctors</h1>
      <p className='text-lg text-gray-600'>Meet our exceptional team of doctors</p>

      {/* Doctor Cards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appoinment/${item._id}`)}key={index} className='flex flex-col items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:-translate-y-2 transition-transform duration-500'>
            <img className='w-24 h-24 rounded-full mb-3' src={item.image} alt={item.name} />
            <div className='text-center'>
              <div className='flex justify-center items-center text-green-600'>
                <p className='mr-1'>●</p>
                <p>Available</p>
              </div>
              <p className='font-bold'>{item.name}</p>
              <p className='text-sm text-gray-500'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button onClick={() => { navigate(`/doctors`); scrollTo(0, 0) }}className='bg-blue-500 text-grey px-12 py-3 rounded-full mt-10 hover:bg-blue-600'>
        View All
      </button>

    </div>
  );
};

export default TopDoctors;
