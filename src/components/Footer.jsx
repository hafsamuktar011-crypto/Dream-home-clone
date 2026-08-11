import React from 'react'
import logo from '../sources/logo.png'
import { AiOutlineFacebook } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const icons = {
  Facebook: <AiOutlineFacebook />,
  Instagram: <FaInstagram />,
  Twitter: <FaSquareXTwitter />
}

const footerLink = {
  About: ["Our Story", "Careers", "Our Teams", "Resources"],
  Support: ["FAQ", "Contact Us", "Help Center", "Terms of Services"],
  "Find Us": ["Events", "Locations", "Newsletter"],
  "Our Socials": ["Instagram", "Facebook", "Twitter"]
}

function Footer() {
  return (
    <footer className="bg-[#E1B1A8] w-full px-6 py-10">

  <div className="
    max-w-7xl mx-auto
    grid grid-cols-1
    md:grid-cols-2
    lg:grid-cols-5
    gap-8
  ">

    <div className="lg:col-span-2">
      <img
        src={logo}
        alt="Dwello logo"
        className="w-32"
      />

      <p className="mt-4 max-w-sm break-words">
        Bringing you closer to your dream home, one click at a time.
      </p>
    </div>

    {Object.entries(footerLink).map(([category, items]) => (
      <div key={category} className="w-full">

        <h2 className="font-bold mb-4">
          {category}
        </h2>

        <ul className="space-y-2">

          {items.map((item) => (
            <li key={item}>

              {category === "Our Socials" ? (
                <a
                  href=""
                  className="flex items-center gap-2"
                >
                  {icons[item]}
                  <span>{item}</span>
                </a>
              ) : (
                <a href="">
                  {item}
                </a>
              )}

            </li>
          ))}

        </ul>

      </div>
    ))}

  </div>

</footer>
  )
}

export default Footer