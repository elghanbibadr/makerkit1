import { Outlet, Link } from "react-router-dom";

const SettingLayout = () => {
  return (
    <div>
      <h1>setting</h1>
      <ul className="text-white">
        <li>
          <Link to="profil">profil</Link>
        </li>
        <li>organization</li>
        <li>subscription</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default SettingLayout;
