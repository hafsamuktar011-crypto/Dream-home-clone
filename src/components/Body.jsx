import React from 'react'
import houseModel from "../sources/Mask group.png"

import { MdAssignment } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { TbCakeRoll } from "react-icons/tb";

import { Residences } from '../assets/Residence.js'
import { testimonials } from '../assets/Testimonials.js';

function Body() {
  return (
    <div className="flex flex-col items-center z-10 pt-20">
      
      <div className="flex flex-row items-center justify-center w-4/5 space-x-10">

        <img src={houseModel} alt="house model" 
        className="w-1/2 rounded-lg max-sm:hidden max-md:hidden" />

        <div className="w-1/2 max-sm:w-full 
        max-md:w-full ">
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
      <div className="flex flex-col items-center justify-center ">
        <h1>Why choose us</h1>
        <p className='max-w-2xl'>Elevating Your Home Buying Experience with Expertise, Integrity,</p> 
          <p>and Unmatched Personalized Service</p>

      </div>
      <div className="flex space-x-2 m-8
       max-md:flex-col max-md:gap-3 max-md:items-center ">
        <div className='bg-[rgb(225,177,168)] p-6 rounded-lg
        w-full max-w-md '>
        <ImLocation2 className='bg-white w-8 h-10 rounded' />
        <h2>Expert Guidance</h2>
        <p>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
       <div className='bg-[#E1B1A8]  p-6 rounded-lg
       w-full max-w-md'>
        <FaUserEdit className='bg-white w-8 h-10 rounded' />
         <h2>Personalized Service</h2>
        <p>Our services adapt to your unique needs, making your journey stress-free.</p>
       </div>
       <div className='bg-[#E1B1A8] p-6 rounded-lg
       w-full max-w-md'>
         <MdAssignment className='bg-white w-8 h-10 rounded'/>
         <h2>Transparent Process</h2>
         <p>Stay informed with our clear and honest approach to buying your home</p>
       </div>
       <div className='bg-[#E1B1A8]  p-6 rounded-lg
       w-full max-w-md'>
       <FaHandshakeSimple className='bg-white w-8 h-10 rounded'/>
        <h2>Exceptional Support</h2>
        <p>Providing peace of mind with our responsive and attentive customer service</p>
       </div>
      </div>

      <>
        <h1 className='text-center m-10'>Our Popular Residences</h1>
        <div className="flex gap-6 m-4 
        max-md:flex-col max-md:items-center
         " >
          {Residences.map((residence) => (
    <div key={residence.id} className="w-90 rounded-lg shadow-md shrink-0">
      <img
        src={residence.img}
        alt={residence.location}
        className="w-full rounded-t-lg"
      />

      <div className="p-4 bg-[#E1B1A8] rounded-b-lg">
        <div className="flex items-center gap-3 justify-center ">
          <ImLocation2/>
        <h2 className="font-bold">
          {residence.location}
        </h2>
        </div>
        
         <div className='flex justify-around space-x-27'>
        <div className="flex items-center gap-2">
          <IoBedOutline />
          <p>{residence.Rooms}</p>
        </div>
        <div className="flex items-center gap-2">
          <TbCakeRoll />
          <p>{residence.covering_area}</p>

        </div>
        </div>

        <div className="flex items-center justify-around space-x-17 p-1">
         <button>Sign up</button>
         <p className="font-bold">
          ${residence.price}
        </p>
        </div>
        
      </div>

    </div>
  ))}
        </div>
  
</>

<div className='bg-[#F8EEEC] w-full'>
  <h1 className='text-center'>What People Say <br/>About Dwello</h1>
  <div>
   {testimonials.map((testimonial) => {
  const Star = testimonial.icon;

  return (
    <div
      key={testimonial.id}
      className="bg-[#E1B1A8] rounded-lg p-5 w-[400px] min-w-[400px] shadow-md"
    >
      {/* Top section */}
      <div className="flex items-center justify-between gap-4">

        {/* Profile + name/location */}
        <div className="flex items-center gap-3">
          <img
            src={testimonial.profile}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h2 className="font-bold">
              {testimonial.name}
            </h2>

            <p className="text-sm">
              {testimonial.location}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="text-xl" />
          <span>{testimonial.rank}</span>
        </div>
      </div>

      {/* Comment */}
      <p className="mt-5 leading-relaxed">
        {testimonial.comment}
      </p>
    </div>
  );
})}
  </div>

</div>

    </div>
  )
}

export default Body
