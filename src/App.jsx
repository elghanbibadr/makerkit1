import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import DashboardLayout from "./ui/DashboardLayout";
import SignUp from "./pages/authPage/SignUp";
import SignIn from "./pages/authPage/SignIn";
import Task from "./pages/task/Task";
import ProfilDetails from "./pages/settings/profil/ProfilDetails";
import Dashboard from "./pages/dashboard/Dashboard";
import SettingProfil from "./pages/settings/profil/SettingProfil";
import OrganizationSetting from "./pages/settings/organization/OrganizationSetting";

import SettingLayout from "./pages/settings/SettingLayout";
import SettingSubscription from "./pages/settings/subscription/SettingSubscription";
import ProfilAuth from "./pages/settings/profil/ProfilAuth";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="dashboard/settings" element={<SettingLayout />}>
            <Route index element={<Navigate replace to="profil" />} />
            <Route path="profil" element={<SettingProfil />}>
              <Route index element={<Navigate replace to="details" />} />
              <Route path="details" element={<ProfilDetails />} />
              <Route path="authentication" element={<ProfilAuth />} />
            </Route>
            <Route path="organization" element={<OrganizationSetting />} />
            <Route path="subscription" element={<SettingSubscription />} />
          </Route>
          <Route path="dashboard/tasks" element={<Task />} />
        </Route>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
