import React from 'react'
import logo from "../sources/logo.png"
import { AiOutlineUser } from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
   const [OpenMenu,setOpenMenu]=useState(false)



  return (
    <div className="flex items-center justify-between p-5 bg-[#F8EEEC]">
    
          {OpenMenu && (
  <div className="relative sm:hidden w-full h-screen bg-white shadow-md flex flex-col">
                <X size={24} onClick={()=>{setOpenMenu(true)}}
                className='absolute top-4 right-4 cursor-pointer border-b' />
                <br />
    <div className="flex space-x-6">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Agents</a>
        <a href="">Contact</a>
      </div>
  </div>
)}
      <img src={logo} alt="logo" className="w-15 h-9" />

      <div className="flex space-x-6 sm:hidden">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Agents</a>
        <a href="">Contact</a>
      </div>

      <div className="flex items-center space-x-4">
        <CiSearch className="text-xl" />
        <AiOutlineUser className="text-xl" />
        <button className=" text-white px-3 py-1 rounded">
          Sign Up
        </button>
      </div>
    
       <div className="sm:hidden">
        <AiOutlineMenu  className="cursor-pointer w-6 h-6" 
  onClick={()=>{
       setOpenMenu(!openMenu)
  }}/>
  
      </div>
      
    </div>
  )
}

export default Nav
