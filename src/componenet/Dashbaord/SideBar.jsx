
import React ,{useState} from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "../../assets/dashboardicon.svg";
import TaskIcon from "../../assets/taskIcon.svg";
import SettingIcon from "../../assets/setting.svg";
import SignInAsListMenu from "../Home/SignInAsListMenu";
import Logo from "../../ui/Logo";
import profilIcon from "../../assets/profilIcon.svg"
import organizationIcon from "../../assets/organizationIcon.svg"
import subscriptionIcon from "../../assets/subscription.svg"
const SidebarLink = ({ to, icon, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center mr-3 hover:bg-[#17182A] px-4 py-[7px] rounded-md my-3 border-transparent text-sm font-base font-medium dark:text-white ${
        isActive ? "bg-[#17182A]" : ""
      }`
    }
    end
  >
    <img className="h-5 mr-3 " src={icon} alt={`${text} icon`} />
    <span className="text-[0.9rem]  text-gray-300">{text}</span>
  </NavLink>
);

export const SideBar = () => {

  const [isSignedAsCardOpen,setIsSignedAsCardOpen]=useState(false)
  const handleUserProfilClicked=()=>{
    setIsSignedAsCardOpen(prv => !prv)
   }

  return (
    <aside className=" lg:fixed hidden pt-4 pl-3 lg:block bg-secondary inset-0 w-[240px]   lg:row-start-1 row-span-2 lg:border-r md:border-accent1">
        <span className="mx-4 inline-block my-4">
          <Logo />
        </span>

      <ul className="text-white relative h-full">
        {/* <li className="flex items-center mr-3 mb-4 text-gray-300 hover:bg-[#17182A] px-4 py-2 rounded-md">
        <Logo />
        </li> */}
        <li>
          <SidebarLink to="/dashboard" icon={DashboardIcon} text="Dashboard" />
        </li>
        <li>
          <SidebarLink to="/dashboard/tasks" icon={TaskIcon} text="Tasks" />
        </li>
        <li>
          <SidebarLink
            to="/dashboard/settings"
            icon={SettingIcon}
            text="Setting"
          />
        </li>
        <li>
          <SidebarLink
            to="/dashboard/settings"
            icon={profilIcon}
            text="Profile"
          />
        </li>
        <li>
          <SidebarLink
            to="/dashboard/settings"
            icon={organizationIcon}
            text="Organization"
          />
        </li>
        <li>
          <SidebarLink
            to="/dashboard/settings"
            icon={subscriptionIcon}
            text="Subscription"
          />
        </li>
        { isSignedAsCardOpen &&   <SignInAsListMenu position="relative top-1"  />}

        <li className="flex absolute bottom-20 w-full items-center mr-3 text-gray-300 hover:bg-[#17182A] px-4 py-2 rounded-md">
      

      <div className="cursor-pointer font-bold text-white">
        <div onClick={handleUserProfilClicked}  className="w-8 h-8   flex justify-center items-center rounded-full bg-darkPink ">
             <h6>B</h6>
           </div>
      </div>
        
   </li>
      </ul>
    </aside>
  );
};
