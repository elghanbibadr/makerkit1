import React, { useState } from "react";
import menuHamburger from "../assets/menu.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import logo from "../assets/logo.svg";

const navLinks = ["Sign In", "Blog", "Documentation", "Pricing", "FAQ"];
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModeCardOpen, setIsModeCardOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleMode = () => {
    setIsModeCardOpen((prv) => !prv);
  };

  return (
    <nav className=" py-2 px-3  border-b border-gray-50 border-opacity-10 dark:border-dark-800/70">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="malerkit logo" />

        {/* dark and light mode togglers */}
        <div className="flex items-center">
          <div className="relative mr-10">
            <img
              className="h-5 cursor-pointer"
              onClick={toggleMode}
              src={moon}
              alt="moon icon"
            />
            <div
              className={`lg:flex text-white ${
                isModeCardOpen
                  ? "block  shadow-pinkBoxShadow border border-gray-50 border-opacity-10 py-4 p-2 rounded-md absolute top-14 -right-3"
                  : "hidden"
              }`}
            >
              <span className="font-semibold ml-3 "> Theme</span>
              <div className="flex my-2 items-center px-8 ">
                <img className="h-4 mr-2" src={sun} alt="sun icon" />
                <span className=" text-sm">light</span>
              </div>
              <div className="flex items-center px-8 ">
                <img className="h-4 mr-2" src={moon} alt="sun icon" />
                <span className=" text-sm">dark</span>
              </div>
            </div>
          </div>

          {/* Menu icon for smaller screens */}
          <div className="lg:hidden relative">
            <img
              onClick={toggleMenu}
              className="h-9 cursor-pointer"
              src={menuHamburger}
              alt="menu hamburger icon"
            />
            {/* Menu items */}
            <div
              className={`lg:flex ${
                isMenuOpen
                  ? "block  shadow-pinkBoxShadow border border-gray-50 border-opacity-10 p-6 px-8 rounded-md absolute top-14 -right-3"
                  : "hidden"
              }`}
            >
              <ul>
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    className="p-1 lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300"
                  >
                    <a href="#" className="text-white">
                      {navLink}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
