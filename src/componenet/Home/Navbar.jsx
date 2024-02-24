import { useContext, useState, useEffect } from "react";
import menuHamburger from "../../assets/menu.svg";
import { Link } from "react-router-dom";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import logo from "../../assets/logo.svg";
import Button from "../../ui/Button";
import { AppContext } from "../../store/AppContext";
import { logout } from "../../services/apiAuth";

const navLinks = [
  { navLink: "Blog", href: "blog" },
  { navLink: "Documentation", href: "documentation" },
  { navLink: "Pricing", href: "pricing" },
  { navLink: "FAQ", href: "faq" },
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
      <label className="btn btn-circle swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
        <div className="w-[80%] lg:w-auto">
          <Link to="/">
            <img src={logo} alt="malerkit logo" />
          </Link>
        </div>

        <div className="lg:flex lg:items-center lg:order-2">
          <div className="relative  mr-10 ">
            <img
              className="h-5 cursor-pointer"
              onClick={toggleMode}
              src={moon}
              alt="moon icon"
            />
            <div
              className={` text-white ${
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
          {/* Menu items */}
          <div
            className={`lg:flex ${
              isMenuOpen
                ? "block  shadow-pinkBoxShadow border border-gray-50 border-opacity-10 p-6 px-8 rounded-md absolute top-14 -right-3"
                : "hidden"
            }`}
          >
            <ul className="lg:flex">
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
          </div>
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
