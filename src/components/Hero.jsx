import React from 'react'
import heroImg from '../sources/hero image 1.png'
import vector from '../sources/Vector 1.png'


function Hero() {
  return (
    <div className="flex flex-row items-center p-10 bg-[#F8EEEC] z-10">

      <div className="ml-5 w-2/5">
        <h1 className="text-3xl font-bold mb-4">Find Your  <p>Dream Home</p></h1>
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

          
           

    </div>
  )
}

export default Hero
