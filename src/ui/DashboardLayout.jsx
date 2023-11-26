import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideBar } from "../componenet/Dashbaord/SideBar";
import { Outlet } from "react-router-dom";
import DashboardNav from "../componenet/Dashbaord/DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[220px_1fr] lg:gap-x-3   h-[93vh]">
      <DashboardNav />

      <div className="row-start-2 col-start-2">
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
};

export default DashboardLayout;
