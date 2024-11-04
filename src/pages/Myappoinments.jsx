import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Myappoinments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">My Appointments</h2>

      <div className="space-y-8">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 p-6 border-b border-gray-200"
          >
            <div className="md:w-1/4 w-full">
              <img
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="md:w-2/4 w-full">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600">{item.speciality}</p>
              <p className="text-gray-500 mt-2">
                <span className="font-medium">Address:</span>
                <span>{item.address.line1}</span><br />
                <span>{item.address.line2}</span>
              </p>
              <p className="text-gray-500 mt-2">
                <span className="font-medium">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>

            <div className="md:w-1/4 w-full flex flex-col justify-center gap-4">
              <button className="bg-white border border-gray-400 text-black px-4 py-2 rounded-md hover:bg-blue transition-colors duration-300">
                Pay Online
              </button>

              <button className="bg-white border border-gray-400  text-black px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myappoinments;
