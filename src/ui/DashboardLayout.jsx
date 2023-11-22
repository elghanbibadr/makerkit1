import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../componenet/Dashbaord/SideBar";
import { Outlet } from "react-router-dom";
import DashboardNav from "../componenet/Dashbaord/DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="md:grid md:grid-cols-[auto_1fr] gap-x-10 h-[90vh]">
      <DashboardNav />

      <div className="row-start-1 col-start-2">
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
};

export default DashboardLayout;
