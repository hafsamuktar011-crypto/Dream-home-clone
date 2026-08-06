import React from 'react'
import heroImg from '../sources/hero image 1.png'
import vector from '../sources/Vector 1.png'
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneHome } from "react-icons/ai";
import { TbCreativeCommonsNc } from "react-icons/tb";

function Hero() {
  return (
    <div className="flex flex-row items-center p-7 bg-[#F8EEEC] z-10">

      <div className="ml-5 w-2/5">
        <h1 className="mb-4">Find Your  <p>Dream Home</p></h1>
        <p className="mb-6 ">
          Explore our curated selection of exquisite properties meticulously
          tailored to your unique dream home vision
        </p>
        <button className="text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </div>
          <div className='relative w-3/5 h-auto '>
             <img src={heroImg} alt="hero" className="w-full h-auto rounded-lg" />
            <img 
          src={vector} 
          alt="vector" 
          className="absolute bottom-0 left-10 transform -translate-x-1/2 w-2/3"
             />
          </div>
        <div className="bg-[#E1B1A8] p-10 w-2/3 flex flex-row items-center justify-around 
              rounded-md shadow-md mb-10 -mt-20 z-20">
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
                <button className=" text-white px-3 py-1 rounded">Sign Up</button>
              </div>
          
           

    </div>
  )
}

export default Hero
