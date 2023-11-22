import { useState } from "react";
import Button from "../../ui/Button";
import { Link, useLocation } from "react-router-dom";
import menu from "../../assets/menu.svg";
import organizationIcon from "../../assets/organization.svg";
import TaskIcon from "../../assets/taskIcon.svg";
import SettingIcon from "../../assets/setting.svg";
import DashboardIcon from "../../assets/dashboardicon.svg";

const navLinks = [
  { name: "Your Organizations", img: organizationIcon },
  { name: "dashboard", img: DashboardIcon },
  { name: "tasks", img: TaskIcon },
  { name: "settings", img: SettingIcon },
];

const DashboardNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const currentURL = location.pathname;

  return (
    <div>
      <div className="flex block md:hidden justify-between">
        <div className="flex items-center">
          <img
            onClick={() => setIsMenuOpen((prv) => !prv)}
            className="h-10 mr-2"
            src={menu}
            alt="menu hamburger"
          />
          <h3 className="text-white">
            {currentURL.includes("tasks")
              ? "Tasks"
              : currentURL.includes("settings")
              ? "Settings"
              : "Dashboard"}
          </h3>
        </div>
        {!currentURL.includes("tasks") && !currentURL.includes("settings") && (
          <Button className="button-transparent text-white rounded-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Add Widget</span>
          </Button>
        )}
        <div
          className={`lg:flex z-50 ${
            isMenuOpen
              ? "block  shadow-pinkBoxShadow border border-gray-50 border-opacity-10 p-6 px-8 rounded-md absolute z-50 opacity-100 top-16 bg-[#030712] -left-3 w-full"
              : "hidden"
          }`}
        >
          <ul className="lg:flex">
            {navLinks.map(({ name, img }, index) => (
              // eslint-disable-next-line react/jsx-key
              <Link to={index > 1 ? `dashboard/${name}` : `${name}`}>
                <li className="p-1 flex items-center gap-2 mb-3 lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300">
                  <img className="h-6 mr-2" src={img} alt="nav icon image" />
                  <a href="#" className="text-white">
                    {name}
                  </a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
