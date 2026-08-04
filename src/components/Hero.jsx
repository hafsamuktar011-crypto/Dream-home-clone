import React from 'react'
import heroImg from '../sources/hero image 1.png'
function Hero() {
  return (
    <div>
      <h1>Find Your Dream Home</h1>
      <p className=''>Explore our curated selection of exquisite 
        properties meticulously tailored 
        to your unique dream home vision</p>
        <img src={heroImg} alt="" />
        <button className='text-white px-3 py-1 rounded'>sign up</button>
    </div>
  )
}

export default Hero
