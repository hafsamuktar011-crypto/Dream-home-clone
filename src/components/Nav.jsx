import React, { useState } from "react";
import logo from "../sources/logo.png";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-[#F8EEEC] font-bold px-5 py-4 relative h-18 w-full">
      <div className=" h-18 flex items-center justify-between ">

        <img src={logo} alt="logo" className="w-15 h-9 max-md:pr-2.5" />

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 max-md:space-x-2">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Agents</a>
          <a href="">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <CiSearch className="text-xl " />
          <AiOutlineUser className="text-xl" />

          <button>
            Sign Up
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="sm:hidden "
            onClick={() => setOpenMenu(!openMenu)}
          >
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="sm:hidden relative shadow-md rounded p-4 bg-[#F8EEEC]">
          <IoClose
            className="absolute right-3 top-3 text-2xl cursor-pointer"
            onClick={() => setOpenMenu(false)}
          />

          <div className="flex flex-col space-y-4 mt-8">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Agents</a>
            <a href="">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;