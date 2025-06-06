import React from 'react'
import { Link } from 'react-scroll';
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks() {
  
  return (
<ul className="flex lg:flex-row sm:flex-col gap-5 text-white font-body 
  lg:relative sm:absolute sm:left-0
  lg:top-[0%] sm:top-[120%] lg:w-fit
  text-center 
  lg:text-md sm:text-xl 
  sm:bg-cyan/30 backdrop-blur-lg lg:bg-black 
  sm:w-full w-fit py-4
  lg:justify-center
">     {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  )
}

export default NavbarLinks
