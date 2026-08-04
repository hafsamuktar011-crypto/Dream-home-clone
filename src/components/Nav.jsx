import React from 'react'
import logo from "../sources/logo.png"
import { AiOutlineUser } from 'react-icons/ai'
import { CiSearch } from "react-icons/ci";

function Nav() {
  return (
    <div className="flex items-center justify-between p-5 ">

      <img src={logo} alt="logo" className="w-10 h-9" />

      <div className="flex space-x-6">
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
    </div>
  )
}

export default Nav
