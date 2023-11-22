import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import menu from "../assets/menu.svg";
import organizationIcon from "../assets/organization.svg";
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
    <div className="md:grid md:grid-cols-[auto_1fr] gap-x-10">
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
      <Outlet />

      <aside className="hidden md:block  md:border-r h-full md:border-accent1">
        <ul className="text-white">
          <li className="flex items-center">
            <span className="font-semibold inline-flex justify-center items-center text-xl text-white bg-blue-600 rounded-full h-7 w-7">
              B
            </span>
            <p className="text-white font-medium text-sm ml-2">badr</p>
          </li>
          <li>dashboard</li>
          <Link to="dashboard/setting">
            <li>setting</li>
          </Link>
          <li>task</li>
        </ul>
      </aside>
    </div>
  );
};

export default DashboardLayout;
