import { SideBar } from "../componenet/Dashbaord/SideBar";
import { Outlet } from "react-router-dom";
import DashboardNav from "../componenet/Dashbaord/DashboardNav";
import DashboardIcon from "../assets/dashboardicon.svg";
import TaskIcon from "../assets/taskIcon.svg";

import profilIcon from "../assets/profilIcon.svg";
import organizationIcon from "../assets/organizationIcon.svg";
import subscriptionIcon from "../assets/subscription.svg";

const sidebarLinks = [
  { to: "/dashboard", icon: DashboardIcon, text: "Dashboard" },
  { to: "/dashboard/tasks", icon: TaskIcon, text: "Tasks" },
  { to: "/dashboard/settings/profil", icon: profilIcon, text: "Profile" },
  { to: "/dashboard/settings/organization", icon: organizationIcon, text: "Organization" },
  { to: "/dashboard/settings/subscription", icon: subscriptionIcon, text: "Subscription" },
];
const DashboardLayout = () => {
  return (
    <div className="lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[220px_1fr] lg:gap-x-6  ">
      <DashboardNav />

      <div  className="row-start-2 col-start-2">
        <Outlet />
      </div>
      <SideBar links={sidebarLinks} />
          </div>
  );
};

export default DashboardLayout;
