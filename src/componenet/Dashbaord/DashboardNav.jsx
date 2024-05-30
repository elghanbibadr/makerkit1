import { useState } from "react";
import Button from "../../ui/Button";
import { Link, useLocation } from "react-router-dom";
import menu from "../../assets/menu.svg";
import organizationIcon from "../../assets/organization.svg";
import TaskIcon from "../../assets/taskIcon.svg";
import SettingIcon from "../../assets/setting.svg";
import DashboardIcon from "../../assets/dashboardicon.svg";
import plusCircleIcon from '../../assets/pluscircleicon.svg'
import { ButtonTransparent } from "../../ui/Button-transparent";
import { MenuListLink } from "../Home/SignInAsListMenu";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../../ui/Card";

const navLinks = [
  { name: "organizations", img: organizationIcon },
  { name: "dashboard", img: DashboardIcon },
  { name: "tasks", img: TaskIcon },
  { name: "settings", img: SettingIcon },
];

const DashboardNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentURL = location.pathname;


  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="col-start-2">
      <div className="flex   mb-10   justify-between md:h-fit">
        <div className="flex items-center ">
          <img
            onClick={() => setIsMenuOpen((prv) => !prv)}
            className="h-8 mr-2 lg:hidden"
            src={menu}
            alt="menu hamburger"
          />
          <div>
            <h3 className="text-white ">
              {currentURL.includes("tasks")
                ? "Tasks"
                : currentURL.includes("settings")
                ? "Settings"
                : "Dashboard"}
            </h3>
            <h5 className="hidden lg:block text-gray-400 text-lg font-normal">
              {currentURL.includes("tasks")
                ? "Manage your Tasks and never lose track of your work.                "
                : currentURL.includes("settings")
                ? "Manage your settings and preferences.                "
                : "An overview of your organization's activity and performance across all your projects.                "}
            </h5>
          </div>
        </div>
        {!currentURL.includes("tasks") && !currentURL.includes("settings") && <ButtonTransparent className='border-none' text='Add Widget' icon={plusCircleIcon}  />   }
        <motion.div
          className={`lg:flex z-50 lg:hidden ${
            isMenuOpen
              ? "block  shadow-pinkBoxShadow border border-gray-50 border-opacity-10  rounded-md absolute z-50 opacity-100 top-20 bg-[#030712] left-4 w-[80%]"
              : "hidden"
          }`}
        >
         

            <ul className="" 
             >
              {navLinks.map(({ name, img }, index) => (
                <Link  key={index} to={index > 1 ? `dashboard/${name}` : `dashboard/settings/${name}`}>
                  <li className="">
            
                    <MenuListLink icon={img} text={name} />
                  </li>
                </Link>
              ))}
            </ul>

         
        </motion . div>
      </div>
    </div>
  );
};

export default DashboardNav;
