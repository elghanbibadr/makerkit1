import { useContext, useState, useEffect } from "react";
import menuHamburger from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import moon from "../../assets/moon.svg";
// import sun from "../../assets/sun.svg";
import Button from "../../ui/Button";
import { AppContext } from "../../store/AppContext";
import { logout } from "../../services/apiAuth";
import MenuList from "../../ui/MenuList";
import Logo from "../../ui/Logo";
import ScreenModeCard from "../../ui/ScreenModeCard";
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

  return (
    <nav className=" py-2 px-3  border-b border-gray-50 border-opacity-10 dark:border-dark-800/70">
   
      <div className="container mx-auto flex justify-between items-center">
      
       <Logo />

        <div className="lg:flex lg:items-center lg:order-2">
          <div className="relative  mr-10 ">
            <img
              className="h-5 cursor-pointer"
              onClick={toggleMode}
              src={moon}
              alt="moon icon"
            />
            {isModeCardOpen && <ScreenModeCard />}
            {/* BUTTONS */}
          </div>
          <div className="hidden lg:flex">
            {!session && (
              <Link to="/auth/signin">
                <Button className="text-white mx-4 hover:bg-accent1 px-6 py-2 rounded-full">
                  Sign In
                </Button>
              </Link>
            )}

            {session && (
              <Button
                onClick={logout}
                className="text-white mx-4 hover:bg-accent1 px-6 py-2 rounded-full"
              >
                Log out
              </Button>
            )}

            {!session && (
              <Link to="/auth/signup">
                <Button className="bg-darkPink rounded-full text-white px-6 py-2">
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
            className="h-9 cursor-pointer lg:hidden"
            src={menuHamburger}
            alt="menu hamburger icon"
          />
       
            <ul className=" hidden lg:block lg:flex">
              {navLinks.map(({ navLink, href }) => (
                <li
                  key={navLink.id}
                  className="p-1 lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300"
                >
                  <Link to={href} className="text-white">
                    {navLink}
                  </Link>
                </li>
              ))}
              <li className="p-1 lg:hidden lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300">
                <a href="#" className="text-white">
                  sign in
                </a>
              </li>
            </ul>
          { isMenuOpen && <MenuList menuItems={navLinks} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
