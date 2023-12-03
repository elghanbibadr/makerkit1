import { Outlet, Link } from "react-router-dom";

const SettingLayout = () => {
  return (
    <div>
      <h1>setting</h1>
      <ul className="text-white flex w-full justify-between md:flex-auto md:justify-normal mb-6 border-accent1 border-b-[1px] pb-3   items-center gap-x-10">
        <li className="text-[1rem] capitalize font-medium">
          <Link to="profil">profil</Link>
        </li>
        <li className="text-[1rem] capitalize font-medium">
          <Link to="organization">organization</Link>
        </li>
        <li className="text-[1rem] capitalize font-medium">
          <Link to="subscription">subscription</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default SettingLayout;
