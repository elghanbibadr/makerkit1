import { NavLink, Outlet } from "react-router-dom";

const OrganizationSetting = () => {
  return (
    <div className="lg:gap-x-10 lg:grid lg:grid-cols-[200px_1fr] ">
      <ul className="text-gray-300 text-[0.91rem] pr-6 capitalize font-medium ">
        <li className="my-4">
          <NavLink
            to=""
            className={({ isActive }) =>
              `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
                isActive ? "bg-[#17182A]" : ""
              }`
            }
            end
          >
            General
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="members"
            className={({ isActive }) =>
              `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
                isActive ? "bg-[#17182A]" : ""
              }`
            }
            end
          >
            Members
          </NavLink>
        </li>
      </ul>
      <div className="border border-accent1 rounded-md p-5 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default OrganizationSetting;
