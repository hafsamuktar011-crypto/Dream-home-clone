import React from 'react'
import houseModel from "../sources/Mask group.png"
import { MdAssignment } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

function Body() {
  return (
    <div className="flex flex-col items-center relative">
      
      <div className="flex flex-row items-center justify-center w-4/5 space-x-10">

        <img src={houseModel} alt="house model" className="w-1/2 rounded-lg" />

        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-4">
            We Help You To Find Your Dream Home
          </h1>
          <span>
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </span>
          <div className="flex flex-row gap-7 ">
  <div className="flex flex-col">
    <p className="font-bold text-2xl">8K+</p>
    <p >Houses Available</p>
  </div>

  <div className="flex flex-col ">
    <p className="font-bold text-2xl">6K+</p>
    <p >Houses Sold</p>
  </div>

  <div className="flex flex-col">
    <p className="font-bold text-2xl">2K+</p>
    <p >Trusted Agents</p>
  </div>
</div>

        </div>
      </div>
      <div className="flex flex-col items-center justify-center  ">
        <h1>Why choose us</h1>
        <p className='max-w-2xl'>Elevating Your Home Buying Experience with Expertise, Integrity,</p> 
          <p>and Unmatched Personalized Service</p>

      </div>
      <div className="flex space-x-2 m-4">
        <div className='bg-[#E1B1A8] w-74 p-6 rounded-lg'>
        <ImLocation2 className='bg-white w-8 h-10 rounded' />
        <h2>Expert Guidance</h2>
        <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
       <div className='bg-[#E1B1A8] w-74 p-6 rounded-lg'>
        <FaUserEdit className='bg-white w-8 h-10 rounded' />
         <h2>Personalized Service</h2>
        <p>Our services adapt to your unique needs, making your journey stress-free.</p>
       </div>
       <div className='bg-[#E1B1A8] w-74 p-6 rounded-lg'>
         <MdAssignment className='bg-white w-8 h-10 rounded'/>
         <h2>Transparent Process</h2>
         <p>Stay informed with our clear and honest approach to buying your home</p>
       </div>
       <div className='bg-[#E1B1A8] w-74 p-6 rounded-lg'>
       <FaHandshakeSimple className='bg-white w-8 h-10 rounded'/>
        <h2>Exceptional Support</h2>
        <p>Providing peace of mind with our responsive and attentive customer service</p>
       </div>
      </div>
    </div>
  )
}

export default Body
