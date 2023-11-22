import React from "react";
import { Link } from "react-router-dom";
import dashboardicon from "../../assets/dashboardicon.svg";

export const SideBar = () => {
  return (
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

        <Link to="dashboard/tasks">
          <li className="flex w-full items-center my-3 rounded-md border-transparent text-sm font-base transition-colors duration-300  space-x-2.5 bg-primary/5 dark:bg-primary-300/10 font-medium dark:bg-dark-800  dark:text-white">
            <img className="h-7" src={dashboardicon} alt="dashboard icon" />
            <span>Task</span>
          </li>
        </Link>
        <Link to="dashboard/settings">
          <li className="flex w-full items-center rounded-md my-2 border-transparent text-sm font-base transition-colors duration-300  space-x-2.5 bg-primary/5 dark:bg-primary-300/10 font-medium dark:bg-dark-800  dark:text-white">
            <img className="h-7" src={dashboardicon} alt="dashboard icon" />
            <span>Setting</span>
          </li>
        </Link>
      </ul>
    </aside>
  );
};
