import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Apponitments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [docSlots, setDocSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState(null); // To track the selected date
  const [slotTime, setSlotTime] = useState(''); // To track the selected time slot

  const fetchDocInfo = async () => {
    try {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctor info:', error);
      setLoading(false);
    }
  };

  const getAvailableSlots = async () => {
    setDocSlots({});

    let today = new Date();
    let slotsByDay = {};

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End time at 9 PM

      if (today.getDay() === currentDate.getDay()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10); // Set start time for other days to 10 AM
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      let formattedDate = currentDate.toLocaleDateString();
      slotsByDay[formattedDate] = timeSlots;
    }

    setDocSlots(slotsByDay);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  const handleDateClick = (date) => {
    setSelectedDate(date); // Set the selected date
    setSlotTime(''); // Reset the selected time when a new date is selected
  };

  return docInfo && (
    <div>
      {/* Doctor details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-blue w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='flex-1 border-gray-400 rounded-lg p-6 py-7 bg-white mx-2 sm:mx-0 mt-4 sm:mt-0 shadow-lg'>
          <h2 className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt='' />
          </h2>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt='' />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            APPOINTMENT FEE: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className='mt-6 sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='font-medium text-gray-700'>Select a Date</p>
        <div className='flex flex-wrap gap-4 mt-4'>
          {
            Object.keys(docSlots).map((date, index) => {
              const dayOfWeek = daysOfWeek[new Date(date).getDay()];
              const formattedDate = new Date(date).toLocaleDateString();
              return (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg border ${selectedDate === date ? 'bg-blue text-black' : 'border-gray-200 text-gray-600'}`}
                  onClick={() => handleDateClick(date)}
                >
                  {`${dayOfWeek}, ${formattedDate}`}
                </button>
              );
            })
          }
        </div>

        {/* Display Time Slots for the Selected Date */}
        {selectedDate && (
          <div className='mt-6'>
            <p className='font-medium text-gray-700'>Available Time Slots for {selectedDate}</p>
            <div className='flex flex-wrap gap-4 mt-4'>
              {
                docSlots[selectedDate]?.map((slot, i) => (
                  <button
                    key={i}
                    className={`px-3 py-2 rounded-lg border ${slotTime === slot.time ? 'bg-green-600 text-white' : 'border-gray-200 text-gray-600'}`}
                    onClick={() => setSlotTime(slot.time)}
                  >
                    {slot.time}
                  </button>
                ))
              }
            </div>
          </div>
        )}
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>
      
    </div>
  );
};

export default Apponitments;
