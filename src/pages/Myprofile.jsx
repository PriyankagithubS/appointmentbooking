import React, { useState,useContext } from 'react'

import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Myprofile = () => {
  const { userData, setUserData,token , backendUrl,loadUserProfileData } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)


  const updateUserProfileData=async()=>{
    
   
  }

  return userData &&(
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* <!-- Profile Image --> */}
        <div className="md:w-1/3 w-full">
          <img
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
            src={assets.profile_pic}
            alt="Profile"
          />
        </div>

        {/* <!-- Profile Info --> */}
        <div className="md:w-2/3 w-full">
          <div className="mb-6">
            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
                className="border p-2 w-full rounded-md mb-4 focus:ring-2 focus:ring-indigo-500"
              />
            ) : (
              <p className="text-2xl font-semibold text-gray-700">{userData.name}</p>
            )}
          </div>

          <hr className="my-6" />

          {/* <!-- Contact Information --> */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">CONTACT INFORMATION</h2>

            {/* <!-- Email and Phone --> */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">Email ID:</p>
              <p className="text-sm text-gray-700">{userData.email}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">Phone Number:</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                  className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-sm text-gray-700">{userData.phone}</p>
              )}
            </div>

            {/* <!-- Address --> */}
            {/* <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">Address:</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                  className="border p-2 w-full rounded-md mb-2 focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-sm text-gray-700">{userData.address}</p>
              )}
            </div> */}
          </div>

          {/* <!-- Basic Information --> */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-4">BASIC INFORMATION</h2>

            {/* <!-- Gender --> */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">Gender:</p>
              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData({ ...userData, gender: e.target.value })
                  }
                  className="border p-2 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <p className="text-sm text-gray-700">{userData.gender}</p>
              )}
            </div>

            {/* <!-- Date of Birth --> */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">Date of Birth:</p>
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData({ ...userData, dob: e.target.value })
                  }
                  className="border p-2 w-full rounded-md focus:ring-2 focus:ring-indigo-500"
                />
              ) : (
                <p className="text-sm text-gray-700">{userData.dob}</p>
              )}
            </div>
          </div>

          {/* <!-- Buttons --> */}
          <div className="mt-6">
            {isEdit ? (
              <button
                onClick={() => setIsEdit(false)}
                className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save Information
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>


  )
}

export default Myprofile 