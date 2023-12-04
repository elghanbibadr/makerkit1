import { Outlet, NavLink } from "react-router-dom";

const SettingProfil = () => {
  return (
    <div className="lg:gap-x-10 lg:grid lg:grid-cols-[200px_1fr] ">
      <ul className="text-gray-300 text-[0.91rem] pr-6 capitalize font-medium ">
        <li className="my-4">
          <NavLink
            to="details"
            className={({ isActive }) =>
              `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
                isActive ? "bg-[#17182A]" : ""
              }`
            }
            end
          >
            My Details
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="authentication"
            className={({ isActive }) =>
              `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
                isActive ? "bg-[#17182A]" : ""
              }`
            }
            end
          >
            Authentication
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="email"
            className={({ isActive }) =>
              `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
                isActive ? "bg-[#17182A]" : ""
              }`
            }
            end
          >
            Email
          </NavLink>
        </li>
        <li className="my-4">
          <NavLink
            to="password"
            className={({ isActive }) =>
              `flex items-center mr-3 hover:bg-[#17182A] px-4 py-2 rounded-md my-2 border-transparent text-sm font-base font-medium dark:text-white ${
                isActive ? "bg-[#17182A]" : ""
              }`
            }
            end
          >
            Password
          </NavLink>
        </li>
      </ul>
      <div className="border border-accent1 rounded-md p-5 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingProfil;
