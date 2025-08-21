import React, { useEffect } from 'react'

import { getone_user } from '../redux/action'
import { useDispatch,useSelector } from 'react-redux'
import User from "../assets/images/5.png"

const Profile = () => {


 const getoneuser = useSelector((state)=>state.getoneuser.getoneuser.user)

 const dispatch = useDispatch()


 useEffect(()=>{
    
dispatch(getone_user())

 },[dispatch])


console.log(getoneuser);




  return (
    <>
{/* Enquiry Section */}
<section className="relative max-w-7xl mx-auto px-4 py-16">
  {/* Header Section */}
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      Change your Profile <span className="text-red-600">Details</span>
    </h1>
    <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      {/* We're here to help you begin your creative journey. Fill out the form below and our team will get back to you shortly. */}
    </p>
  </div>
  {/* Form Container */}
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
    <div className="md:flex">
      {/* Left Side */}

    
      <div className="md:w-1/3 bg-gradient-to-br from-violet-600 to-blue-800 p-10 text-white flex flex-col justify-between">
      <img className='rounded-full' src={User} alt="" />
        <div>
          <h2 className="text-2xl font-bold mb-4">{getoneuser.email}</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              
              <span>{getoneuser.designation}</span>
            </li>
            <li className="flex items-start">
              
              <span>{getoneuser.name}</span>
            </li>
            <li className="flex items-start">
              
              <span>{getoneuser.role}</span>
            </li>
            <li className="flex items-start">
              
              <span>{getoneuser.status}</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Right Side - Form */}
      <div className="md:w-2/3 p-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="fullName" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" required />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" required />
            </div>
            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <input type="tel" name="mobileNumber" placeholder="+91 9876543210" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" required />
            </div>
            {/* Course Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select name="courses" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 bg-white" required>
                <option value>Sales Manager</option>
                <option value="user">user</option>
                <option value="Admin">Admin</option>
               
              </select>
            </div>
          </div>
          {/* Message */}
          <div>
            
          </div>
          {/* Submit */}
          <div>
            <button type="submit" className="w-full py-3 px-6 bg-violet-600 text-white font-medium rounded-lg shadow-sm hover:bg-violet-700 transition duration-300">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Profile