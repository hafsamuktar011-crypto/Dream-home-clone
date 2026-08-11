import React from 'react'
import logo from '../sources/logo.png'
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const icons={
  faceBook:<AiOutlineFacebook />,
  instagram:<FaInstagram />,
  twitter:<FaSquareXTwitter />
}
const footerLink={
  About:["Our Story","Careers","Our Teams","Resources"],
  Support:["FAQ","Contact Us","Help Center", "Terms of Services"],
  "Find Us":["Events","Locations","Newsletter"],
  "Our Socials":["instagram","facebook","twitter"]
}


function Footer() {
  return (
    <footer>

    </footer>
  
  )
}

export default Footer
