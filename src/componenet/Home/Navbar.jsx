import { useContext, useState, useEffect } from "react";
import menuHamburger from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import moon from "../../assets/moon.svg";
import Button from "../../ui/Button";
import { AppContext } from "../../store/AppContext";
import { logout } from "../../services/apiAuth";
import { useLogout } from "../../hook/useLogout";
import MenuList from "../../ui/MenuList";
import Logo from "../../ui/Logo";
import ScreenModeCard from "../../ui/ScreenModeCard";
import { AnimatePresence } from "framer-motion";

import SignInAsListMenu from "./SignInAsListMenu";
const navLinks = [
  { navLink: "Blog", href: "blog" },
  { navLink: "Documentation", href: "documentation" },
  { navLink: "Pricing", href: "pricing" },
  { navLink: "FAQ", href: "faq" },
];
const modeLinks = [
  { navLink: "light",  },
  { navLink: "dark" },
 
];
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModeCardOpen, setIsModeCardOpen] = useState(false);
  const [isSignedAsCardOpen,setIsSignedAsCardOpen]=useState(false)


  const { session } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const toggleMode = () => {
    setIsModeCardOpen((prv) => !prv);
  };

  console.log(session);
  const closeMenu = () => {
    if (window.innerWidth > 1023) {
      setMenuOpen(false);
    }
  };

  // useEffect to add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);


  const handleUserProfilClicked=()=>{
   setIsSignedAsCardOpen(prv => !prv)
  }
  return (
    <nav className=" pb-2 px-3  border-b border-gray-50 border-opacity-10 dark:border-dark-800/70">
   
      <div className="container mx-auto flex justify-between items-center">
      
       <Logo />

        <div className="lg:flex lg:items-center lg:order-2">
          <div className="relative  mr-10 ">
            {/* <img
              className="h-8  p-1 shadow-lg border-2 border-transparent hover:border-darkPink rounded-full"
              onClick={toggleMode}
              src={moon}
              alt="moon icon"
            /> */}
            {/* <AnimatePresence>{isModeCardOpen && <ScreenModeCard />}</AnimatePresence> */}
            {/* BUTTONS */}
          </div>
          <div className=" lg:flex">
            {!session && (
              <Link to="/auth/signin">
                <Button className="text-white hidden lg:block mx-4 hover:bg-accent1 px-6 py-2 rounded-full">
                  Sign In
                </Button>
              </Link>
            )}

            {session && (
             
              <>
              <div onClick={handleUserProfilClicked} className="bg-darkPink cursor-pointer w-10 h-10 rounded-full flex justify-center items-center font-bold text-white">
                <h6>B</h6>
              </div>
             
               { isSignedAsCardOpen &&  <SignInAsListMenu position="right-6 top-20" />}
              </>
            
            )}

            {!session && (
              <Link to="/auth/signup">
                <Button className="bg-darkPink hidden lg:block rounded-full text-white px-6 py-2">
                  Sign Up
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Menu icon for smaller screens */}
        <div className=" relative">
          <img
            onClick={toggleMenu}
            className="h-7  lg:hidden"
            src={menuHamburger}
            alt="menu hamburger icon"
          />
       
            <ul className=" hidden lg:block lg:flex">
              {navLinks.map(({ navLink, href }) => (
                <li
                  key={navLink.id}
                  className="p-1 lg:px-2.5 text-[0.95rem]  font-semibold  rounded-md  text-gray-300  hover:text-white transition-colors duration-100"
                >
                  <Link to={href}>
                    {navLink}
                  </Link>
                </li>
              ))}
              <li className="p-1 lg:hidden lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300">
                <a href="#" className="text-gray-300">
                  sign in
                </a>
              </li>
            </ul>
            <AnimatePresence>
             { isMenuOpen && <MenuList menuItems={navLinks} />}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
