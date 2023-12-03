import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import DashboardLayout from "./ui/DashboardLayout";
import SignUp from "./pages/authPage/SignUp";
import Setting from "./pages/settings/Setting";
import SignIn from "./pages/authPage/SignIn";
import Task from "./pages/task/Task";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="dashboard/settings" element={<Setting />}>
            <Route index element={<Navigate replace to="profil" />} />
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
