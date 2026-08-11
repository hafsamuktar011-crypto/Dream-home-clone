import React from 'react'
import logo from '../sources/logo.png'
import { AiOutlineFacebook } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const icons = {
  facebook: <AiOutlineFacebook />,
  instagram: <FaInstagram />,
  twitter: <FaSquareXTwitter />
}

const footerLink = {
  About: ["Our Story", "Careers", "Our Teams", "Resources"],
  Support: ["FAQ", "Contact Us", "Help Center", "Terms of Services"],
  "Find Us": ["Events", "Locations", "Newsletter"],
  "Our Socials": ["instagram", "facebook", "twitter"]
}

function Footer() {
  return (
    <footer>

      <div>
        <img src={logo} alt="Dwello logo" />
        <p>
          Bringing you closer to your dream home, one click at a time.
        </p>
      </div>

      {Object.entries(footerLink).map(([category, items]) => (
        <div key={category}>

          <h2>{category}</h2>

          <ul>
            {items.map((item) => (
              <li key={item}>

                {category === "Our Socials" ? (
                  <a href="">
                    {icons[item]}
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

    </footer>
  )
}

export default Footer