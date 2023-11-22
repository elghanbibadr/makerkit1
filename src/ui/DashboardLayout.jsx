import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import menu from "../assets/menu.svg";
import organizationIcon from "../assets/organization.svg";
import dashboardicon from "../assets/dashboardicon.svg";

import Button from "../ui/Button";
const navLinks = [
  "Your Organizations",
  "Blog",
  "Documentation",
  "Pricing",
  "FAQ",
];
const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:grid md:grid-cols-[auto_1fr] gap-x-10 h-[90vh]">
      {/* nav */}

      <div className="">
        <div className="flex block md:hidden justify-between">
          <div className="flex items-center">
            <img
              onClick={() => setIsMenuOpen((prv) => !prv)}
              className="h-10"
              src={menu}
              alt="menu hamburger"
            />
            <h3 className="text-white">Dashboard</h3>
          </div>
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
          <div
            className={`lg:flex ${
              isMenuOpen
                ? "block  shadow-pinkBoxShadow border border-gray-50 border-opacity-10 p-6 px-8 rounded-md absolute top-20 -left-3 w-full"
                : "hidden"
            }`}
          >
            <ul className="lg:flex">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className="p-1 flex items-center gap-2 mb-3 lg:px-2.5 text-sm  font-medium  rounded-md  text-gray-600 dark:text-gray-300"
                >
                  <img className="h-6 mr-2" src={organizationIcon} alt="" />
                  <a href="#" className="text-white">
                    {navLink}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* sidebar */}
      <div className="row-start-1 col-start-2">
        <Outlet />
      </div>

      <aside className="hidden md:block pr-6 md:row-start-1 row-span-2 md:border-r   md:border-accent1">
        <ul className="text-white">
          <li className="flex items-center text-gray-300">
            <span className="font-semibold inline-flex justify-center items-center text-xl text-white bg-blue-600 rounded-full h-7 w-7">
              B
            </span>
            <p className="text-white font-medium text-sm ml-2">badr</p>
          </li>
          <Link to="/dashboard">
            <li className="flex w-full items-center mt-5  rounded-md border-transparent text-sm font-base transition-colors duration-300  space-x-2.5 bg-primary/5 dark:bg-primary-300/10 font-medium dark:bg-dark-800  dark:text-white">
              <img className="h-7" src={dashboardicon} alt="dashboard icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="dashboard/task">
            <li className="flex w-full items-center my-3 rounded-md border-transparent text-sm font-base transition-colors duration-300  space-x-2.5 bg-primary/5 dark:bg-primary-300/10 font-medium dark:bg-dark-800  dark:text-white">
              <img className="h-7" src={dashboardicon} alt="dashboard icon" />
              <span>Task</span>
            </li>
          </Link>
          <Link to="dashboard/setting">
            <li className="flex w-full items-center rounded-md my-2 border-transparent text-sm font-base transition-colors duration-300  space-x-2.5 bg-primary/5 dark:bg-primary-300/10 font-medium dark:bg-dark-800  dark:text-white">
              <img className="h-7" src={dashboardicon} alt="dashboard icon" />
              <span>Setting</span>
            </li>
          </Link>
        </ul>
      </aside>
    </div>
  );
};

export default DashboardLayout;
