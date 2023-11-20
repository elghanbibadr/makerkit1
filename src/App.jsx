import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/AuthPage";
import DashboardLayout from "./ui/DashboardLayout";
import SignUp from "./pages/SignUp";
import Setting from "./pages/Setting";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="dashboard/setting" element={<Setting />} />
          <Route path="dashboard/task" element={<Task />} />
        </Route>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
