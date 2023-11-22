import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/AuthPage";
import DashboardLayout from "./ui/DashboardLayout";
import SignUp from "./pages/SignUp";
import Setting from "./pages/Setting";
import SettingProfil from "./pages/SettingProfil";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="dashboard/settings" element={<Setting />}>
            <Route index element={<Navigate replace to="profil" />} />
            <Route path="profil" element={<SettingProfil />} />
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
