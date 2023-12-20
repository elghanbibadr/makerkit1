import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import DashboardLayout from "./ui/DashboardLayout";
import SignUp from "./pages/authPage/SignUp";
import SignIn from "./pages/authPage/SignIn";
import Task from "./pages/task/Task";
import ProfilDetails from "./pages/settings/profil/ProfilDetails";
import Dashboard from "./pages/dashboard/Dashboard";
import SettingProfil from "./pages/settings/profil/SettingProfil";
import OrganizationSetting from "./pages/settings/organization/OrganizationSetting";
import { QueryClient, QueryClientProvider } from "react-query";
import SettingLayout from "./pages/settings/SettingLayout";
import SettingSubscription from "./pages/settings/subscription/SettingSubscription";
import ProfilAuth from "./pages/settings/profil/ProfilAuth";
import ProfilEmailPage from "./pages/settings/profil/ProfilEmailPage";
import ProfilPasswordPage from "./pages/settings/profil/ProfilPasswordPage";
import OrganizationGeneralPage from "./pages/settings/organization/OrganizationGeneralPage";
import OrganizationMemberPage from "./pages/settings/organization/OrganizationMemberPage";
import HomePageLayout from "./pages/homePage/HomePageLayout";
import FaqPage from "./pages/Faq/FaqPage";
import SingleTask from "./pages/task/SingleTask";
import { Toaster } from "react-hot-toast";
import PricingPage from "./pages/Pricing/PricingPage";
import { ReactQueryDevtools } from "react-query/devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePageLayout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="faq" element={<FaqPage />} />
            </Route>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="dashboard/settings" element={<SettingLayout />}>
                <Route index element={<Navigate replace to="profil" />} />
                <Route path="profil" element={<SettingProfil />}>
                  <Route index element={<Navigate replace to="details" />} />
                  <Route path="details" element={<ProfilDetails />} />
                  <Route path="authentication" element={<ProfilAuth />} />
                  <Route path="email" element={<ProfilEmailPage />} />
                  <Route path="password" element={<ProfilPasswordPage />} />
                </Route>
                <Route path="organization" element={<OrganizationSetting />}>
                  <Route index element={<OrganizationGeneralPage />} />
                  <Route path="members" element={<OrganizationMemberPage />} />
                </Route>
                <Route path="subscription" element={<SettingSubscription />} />
              </Route>
              <Route path="dashboard/tasks" element={<Task />} />
              <Route path="dashboard/tasks/:id" element={<SingleTask />} />
              {/* </Route> */}
            </Route>
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "red",
          },
        }}
      />
    </>
  );
}

export default App;
