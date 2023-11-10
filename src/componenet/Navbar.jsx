import React, { useState } from "react";
import menuHamburger from "../assets/menu.svg";
import logo from "../assets/logo.svg";

const navLinks = ["Sign In", "Blog", "Documentation", "Pricing", "FAQ"];
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" py-2 px-3  border-b border-gray-50 border-opacity-10 dark:border-dark-800/70">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="malerkit logo" />

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
    </nav>
  );
};

export default Navbar;
