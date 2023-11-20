import React from "react";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <div>
      <p className="text-white text-5xl">hi</p>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
