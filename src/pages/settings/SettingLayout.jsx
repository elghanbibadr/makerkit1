import { Outlet, NavLink } from "react-router-dom";

const SettingLayout = () => {
  return (
    <div>
      <ul className="text-white flex w-full justify-between pb-3 lg:justify-normal  border-accent1 border-b-[1px]    items-center gap-x-10">
        <li className="text-[1rem] capitalize font-medium ">
          <NavLink
            to="profil"
            className={({ isActive }) =>
              `pb-3  ${isActive ? " border-b-4 border-darkPink" : ""}`
            }
          >
            profil
          </NavLink>
        </li>
        <li className="text-[1rem] capitalize font-medium">
          <NavLink
            to="organization"
            className={({ isActive }) =>
              `pb-3  ${isActive ? " border-b-4 border-darkPink" : ""}`
            }
          >
            organization
          </NavLink>
        </li>
        <li className="text-[1rem] capitalize font-medium">
          <NavLink
            to="subscription"
            className={({ isActive }) =>
              `pb-3  ${isActive ? " border-b-4 border-darkPink" : ""}`
            }
          >
            subscription
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default SettingLayout;
