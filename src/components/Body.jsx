import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneHome } from "react-icons/ai";
import { TbCreativeCommonsNc } from "react-icons/tb";
import houseModel from "../sources/Mask group.png"
import { MdAssignment } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";

function Body() {
  return (
    <div className="flex flex-col items-center relative">
      
      <div className="bg-[#E1B1A8] p-6 w-2/3 flex flex-row items-center justify-around 
      rounded-md shadow-md mb-10 -mt-10 z-20">
        <div className="flex items-center space-x-2">
          <IoLocationSharp />
          <a href="">Location</a>
        </div>
        <div className="flex items-center space-x-2">
          <AiTwotoneHome />
          <a href="">Type</a>
        </div>
        <div className="flex items-center space-x-2">
          <TbCreativeCommonsNc />
          <a href="">Category</a>
        </div>
        <button className="bg-black text-white px-3 py-1 rounded">Sign Up</button>
      </div>

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
          <div className="flex flex-row justify-around w-full">
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
        <p className='max-w-2xl leading-relaxed'>Elevating Your Home Buying Experience with Expertise, Integrity, 
          <br/>and Unmatched Personalized Service</p>

      </div>
      <div className="flex">
        <div>
        <ImLocation2 />
        <h2>Expert Guidance</h2>
        <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
       <div>
        <FaUserEdit />
         <h2>Personalized Service</h2>
        <p>Our services adapt to your unique needs, making your journey stress-free.</p>
       </div>
       <div>
         <MdAssignment />
         <h2>Transparent Process</h2>
         <p>Stay informed with our clear and honest approach to buying your home</p>
       </div>
       <div>
       <FaHandshakeSimple />
        <h2>Exceptional Support</h2>
        <p>Providing peace of mind with our responsive and attentive customer service</p>
       </div>
      </div>
    </div>
  )
}

export default Body
