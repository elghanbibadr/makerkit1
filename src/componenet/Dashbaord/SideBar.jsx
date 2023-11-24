// import React from "react";
// import { NavLink } from "react-router-dom";
// import dashboardicon from "../../assets/dashboardicon.svg";
// import TaskIcon from "../../assets/taskIcon.svg";
// import SettingIcon from "../../assets/setting.svg";
// import DashboardIcon from "../../assets/dashboardicon.svg";
// export const SideBar = () => {
//   return (
//     <aside className="hidden md:block md:row-start-1 row-span-2 md:border-r   md:border-accent1">
//       <ul className="text-white">
//         <li className="flex items-center text-gray-300 hover:bg-[#17182A] px-4 py-2 rounded-md">
//           <span className="font-semibold inline-flex justify-center items-center text-xl text-white bg-blue-600 rounded-full h-7 w-7">
//             B
//           </span>

//           <p className="text-white font-medium text-sm ml-2">badr</p>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard"

//             className={({ isActive }) =>
//               `flex items-center mr-3  hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium  dark:text-white ${
//                 isActive ? "bg-[#17182A]" : ""
//               }`
//             }
//             end
//           >
//             <img
//               className="h-7 mr-3"
//               src={DashboardIcon}
//               alt="dashboard icon"
//             />
//             <span>Dashboard</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="dashboard/tasks"
//             className={({ isActive }) =>
//               `flex items-center mr-3  hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium  dark:text-white ${
//                 isActive ? "bg-[#17182A]" : ""
//               }`
//             }
//           >
//             <img className="h-7 mr-3" src={TaskIcon} alt="task icon" />
//             <span>Task</span>
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="dashboard/settings"
//             className={({ isActive }) =>
//               `flex items-center mr-3  hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium  dark:text-white ${
//                 isActive ? "bg-[#17182A]" : ""
//               }`
//             }
//           >
//             <img className="h-7 mr-3" src={SettingIcon} alt="setting icon" />
//             <span>Setting</span>
//           </NavLink>
//         </li>
//       </ul>
//     </aside>
//   );
// };
import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../../assets/dashboardicon.svg";
import TaskIcon from "../../assets/taskIcon.svg";
import SettingIcon from "../../assets/setting.svg";

const SidebarLink = ({ to, icon, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
        isActive ? "bg-[#17182A]" : ""
      }`
    }
    end
  >
    <img className="h-7 mr-3" src={icon} alt={`${text} icon`} />
    <span>{text}</span>
  </NavLink>
);

export const SideBar = () => {
  return (
    <aside className="hidden lg:block lg:row-start-1 row-span-2 lg:border-r md:border-accent1">
      <ul className="text-white">
        <li className="flex items-center mr-3 text-gray-300 hover:bg-[#17182A] px-4 py-2 rounded-md">
          <span className="font-semibold inline-flex justify-center items-center text-xl text-white bg-blue-600 rounded-full h-7 w-7">
            B
          </span>
          <p className="text-white font-medium text-sm ml-2">badr</p>
        </li>
        <li>
          <SidebarLink to="/dashboard" icon={DashboardIcon} text="Dashboard" />
        </li>
        <li>
          <SidebarLink to="/dashboard/tasks" icon={TaskIcon} text="Task" />
        </li>
        <li>
          <SidebarLink
            to="/dashboard/settings"
            icon={SettingIcon}
            text="Setting"
          />
        </li>
      </ul>
    </aside>
  );
};
