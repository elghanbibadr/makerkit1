import { Outlet, Link } from "react-router-dom";

const SettingProfil = () => {
  return (
    <div className="   lg:gap-x-10 lg:grid lg:grid-cols-[auto_1fr] ">
      <ul className="text-gray-300 text-[0.91rem] pr-6 capitalize font-medium">
        <li className="my-4">
          <Link to="details">My Details</Link>
        </li>
        <li className="my-4">
          <Link to="authentication">Authentication</Link>
        </li>
        <li className="my-4">
          <Link to="email">Email</Link>
        </li>
        <li className="my-4">
          <Link to="password">Password</Link>
        </li>
      </ul>
      <div className="border border-accent1 rounded-md p-5 h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingProfil;
