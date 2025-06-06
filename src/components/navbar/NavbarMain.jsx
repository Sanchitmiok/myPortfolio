import React from "react";
import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

function NavbarMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px]">
        <NavbarLogo />
        <div className={` lg:flex ${isMenuOpen ? 'flex' : 'hidden'}` }>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>
      <div
        className="flex lg:hidden p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px] cursor-pointer"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
}

export default NavbarMain;