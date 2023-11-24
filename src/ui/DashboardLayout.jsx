import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SideBar } from "../componenet/Dashbaord/SideBar";
import { Outlet } from "react-router-dom";
import DashboardNav from "../componenet/Dashbaord/DashboardNav";

const DashboardLayout = () => {
  return (
    <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-x-10   h-[93vh]">
      <DashboardNav />

      <div className="row-start-1 col-start-2">
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
};

export default DashboardLayout;
