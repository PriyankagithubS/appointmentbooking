import { useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter? 'bg-blue text-white':''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter? 'flex':'hidden sm:flex'}`}>
          <p
            onClick={() =>
              speciality === 'General physician'
                ? navigate('/doctors')
                : navigate('/doctors/General physician')
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === 'Gynecologist'
                ? navigate('/doctors')
                : navigate('/doctors/Gynecologist')
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === 'Dermatologist'
                ? navigate('/doctors')
                : navigate('/doctors/Dermatologist')
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === 'Neurologist'
                ? navigate('/doctors')
                : navigate('/doctors/Neurologist')
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === 'Pediatrician'
                ? navigate('/doctors')
                : navigate('/doctors/Pediatrician')
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatrician" ? "bg-indigo-100 text-black" : ""}`}
          >
            Pediatrician
          </p>
          <p
            onClick={() =>
              speciality === 'Gastroenterologist'
                ? navigate('/doctors')
                : navigate('/doctors/Gastroenterologist')
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gastroenterologist
          </p>
        </div>


        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appoinment/${item._id}`)}
                key={index}
                className='flex flex-col items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:-translate-y-2 transition-transform duration-500'
              >
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
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Doctors;
