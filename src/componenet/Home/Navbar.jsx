import { useContext, useState, useEffect } from "react";
import menuHamburger from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { AppContext } from "../../store/AppContext";
import MenuList from "../../ui/MenuList";
import Logo from "../../ui/Logo";
import { AnimatePresence } from "framer-motion";
import SignInAsListMenu from "./SignInAsListMenu";

const navLinks = [
  { navLink: "Blog", href: "blog" },
  { navLink: "Pricing", href: "pricing" },
  { navLink: "FAQ", href: "faq" },
  { navLink: "Conact us", href: "contactUs" },



];


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModeCardOpen, setIsModeCardOpen] = useState(false);
  const [isSignedAsCardOpen, setIsSignedAsCardOpen] = useState(false);

  const { session } = useContext(AppContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


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

  const handleUserProfilClicked = () => {
    setIsSignedAsCardOpen((prv) => !prv);
  };
  return (
    <nav className=" pb-2 px-3  border-b border-gray-50 border-opacity-10 dark:border-dark-800/70">
      <div className=" md:w-[80%] md:mx-auto flex justify-between items-center">
        <Logo />
        <ul className=" hidden  lg:flex lg:justify-between ">
          {navLinks.map(({ navLink, href }) => (
            <li
              key={navLink.id}
              className="p-1 lg:px-2.5 text-[0.95rem]  font-semibold  rounded-md  text-gray-300  hover:text-white transition-colors duration-100"
            >
              <Link to={href}>{navLink}</Link>
            </li>
          ))}
          <li className="p-1 lg:hidden lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300">
            <a href="#" className="text-gray-300">
              sign in
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="lg:flex lg:items-center lg:order-2">
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
                  <div
                    onClick={handleUserProfilClicked}
                    className="bg-darkPink cursor-pointer w-8 h-8 md:h-10 md:w-10 text-xs rounded-full flex justify-center items-center font-bold text-white"
                  >
                    <h6 className="text-sm md:text-base">B</h6>
                  </div>
                  {isSignedAsCardOpen && (
                    <SignInAsListMenu position="right-6 z-[9999999] top-20" />
                  )}
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
            <AnimatePresence>
              {isMenuOpen && <MenuList menuItems={navLinks} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
