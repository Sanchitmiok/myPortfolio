import React from 'react'
import { Link } from 'react-scroll'

const NavbarLogo = () => {
  return (
     <div>
      <Link spy={true} smooth={true} duration={500} offset={-120} to="hero" className="font-bold text-3xl sm:hidden md:block bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent cursor-pointer">
        Sanchit Mishra
      </Link>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        SM
      </h1>
    </div>
  )
}

export default NavbarLogo
