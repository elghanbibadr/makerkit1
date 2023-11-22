import React from "react";
import { Outlet } from "react-router-dom";
const Setting = () => {
  return (
    <div className="text-green-900 text-xl">
      Setting
      <Outlet />
    </div>
  );
};

export default Setting;
