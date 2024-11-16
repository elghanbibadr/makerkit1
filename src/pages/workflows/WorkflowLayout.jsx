import DashboardNav from "../../componenet/Dashbaord/DashboardNav";
import { SideBar } from "../../componenet/Dashbaord/SideBar";
import { Outlet } from "react-router-dom";
import DashboardIcon from "../../assets/dashboardicon.svg";
import TaskIcon from "../../assets/taskIcon.svg";

const sidebarLinks = [
  { to: "/workflow", icon: DashboardIcon, text: "Workflows" },
  { to: "/workflow/profile", icon: TaskIcon, text: "Profile" },
];

const WorkflowLayout = () => {
  return (
    <div className="lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[220px_1fr] lg:gap-x-6">
      <DashboardNav />
      <div className="row-start-2 col-start-2">
        <Outlet /> {/* Render the matched child route's content here */}
      </div>
      <SideBar links={sidebarLinks} />
    </div>
  );
};

export default WorkflowLayout;
