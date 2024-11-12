import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import SignInAsListMenu from "../Home/SignInAsListMenu";
import Logo from "../../ui/Logo";
import { AppContext } from "../../store/AppContext";

const SidebarLink = ({ to, icon, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center mr-3 hover:bg-[#17182A] px-4 py-[7px] rounded-md my-3 border-transparent text-sm font-medium text-white ${
        isActive ? "bg-[#17182A]" : ""
      }`
    }
    end
  >
    <img className="h-5 mr-3" src={icon} alt={`${text} icon`} />
    <span className="text-[0.9rem] text-gray-300">{text}</span>
  </NavLink>
);

export const SideBar = ({ links }) => {
  const { session } = useContext(AppContext);
  const [isSignedAsCardOpen, setIsSignedAsCardOpen] = useState(false);

  const handleUserProfileClick = () => {
    setIsSignedAsCardOpen((prev) => !prev);
  };

  return (
    <aside className="lg:fixed hidden  pt-4 pl-3 lg:block bg-secondary inset-0 w-[240px] lg:row-start-1 row-span-2 lg:border-r md:border-accent1">
      <div className="mx-4 my-4">
        <Logo />

      </div>

      <ul className="text-white mt-10 relative h-full">
        {links.map((link, index) => (
          <li key={index}>
            <SidebarLink to={link.to} icon={link.icon} text={link.text} />
          </li>
        ))}

        {isSignedAsCardOpen && <SignInAsListMenu position="relative -top-[70px]" />}

        <li
          onClick={handleUserProfileClick}
          className="flex absolute left-3 bottom-20 cursor-pointer items-center mr-3 text-gray-300 hover:bg-[#17182A] px-4 py-2 rounded-md border-accent1 border w-[90%]"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 flex justify-center items-center rounded-full bg-darkPink">
              <h6 className="font-semibold text-sm text-white">B</h6>
            </div>
            <span className="text-[13px] font-normal text-gray-400">{session?.user?.email}</span>
          </div>
        </li>
      </ul>
    </aside>
  );
};
