import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneHome } from "react-icons/ai";
import { TbCreativeCommonsNc } from "react-icons/tb";
import houseModel from "../sources/Mask group.png"

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
          <span className="text-gray-700">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </span>
          <div className="flex">
            <span>8K+ <p>houses available</p></span>
            <span>6K+ <p>houses sold</p></span>
            <span>2K+ <p>Trusted agents</p></span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
