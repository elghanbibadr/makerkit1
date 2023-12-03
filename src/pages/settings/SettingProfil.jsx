import React from "react";
import { Outlet, Link } from "react-router-dom";
const SettingProfil = () => {
  return (
    <div className="text-red-700 text-4xl flex gap-x-10 ">
      <ul>
        <li>
          <Link to="details">My Details</Link>
        </li>
        <li>
          <Link to="authentication">Authentication</Link>
        </li>
        <li>
          <Link to="email">Email</Link>
        </li>
        <li>
          <Link to="password">Password</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default SettingProfil;
