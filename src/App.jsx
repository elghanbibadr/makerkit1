import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Toaster } from "react-hot-toast";
import LoadingSpinner from "./ui/LoadingSpinner";
import OnBoardingPage from "./pages/onboarding/OnBoardingPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import OrganizationInviteMembrePage from "./pages/settings/organization/OrganizationInviteMembrePage";
import InviteAcceptedPage from "./pages/inviteAccepted/InviteAcceptedPage";
import EmailChangeConfirmation from "./pages/emailChangeConfirmation/EmailChangeConfirmation";

// Lazy load components
const HomePageLayout = lazy(() => import("./pages/homePage/HomePageLayout"));
const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const PricingPage = lazy(() => import("./pages/Pricing/PricingPage"));
const FaqPage = lazy(() => import("./pages/Faq/FaqPage"));
const DashboardLayout = lazy(() => import("./ui/DashboardLayout"));
const SignIn = lazy(() => import("./pages/authPage/SignIn"));
const SignUp = lazy(() => import("./pages/authPage/SignUp"));
const Task = lazy(() => import("./pages/task/Task"));
const SingleTask = lazy(() => import("./pages/task/SingleTask"));
const SettingLayout = lazy(() => import("./pages/settings/SettingLayout"));
const SettingProfil = lazy(() => import("./pages/settings/profil/SettingProfil"));
const ProfilDetails = lazy(() => import("./pages/settings/profil/ProfilDetails"));
const ProfilAuth = lazy(() => import("./pages/settings/profil/ProfilAuth"));
const ProfilEmailPage = lazy(() => import("./pages/settings/profil/ProfilEmailPage"));
const ProfilPasswordPage = lazy(() => import("./pages/settings/profil/ProfilPasswordPage"));
const OrganizationSetting = lazy(() => import("./pages/settings/organization/OrganizationSetting"));
const OrganizationGeneralPage = lazy(() => import("./pages/settings/organization/OrganizationGeneralPage"));
const OrganizationMemberPage = lazy(() => import("./pages/settings/organization/OrganizationMemberPage"));
const SettingSubscription = lazy(() => import("./pages/settings/subscription/SettingSubscription"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));

// Create query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePageLayout />}>
              <Route index path="/" element={<HomePage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="emailChanged" element={<EmailChangeConfirmation />} />
              
              <Route path="inviteAccepted" element={<InviteAcceptedPage />} />

            </Route>

            {/* <ProtectedRoute> */}
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} />
            
            {/* <ProtectedRoute> */}
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>} />

            {/* <ProtectedRoute> */}
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route index element={<Navigate replace to='dashboard' />} />
              <Route path="dashboard" element={<Dashboard />} />
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
                  <Route path="members" element={<OrganizationMemberPage />}>
                  </Route>
                  <Route path="members/invite" element={<OrganizationInviteMembrePage />} />
                </Route>
                <Route path="subscription" element={<SettingSubscription />} />
              </Route>
              <Route path="dashboard/tasks" element={<ProtectedRoute><Task /></ProtectedRoute>} />
              <Route path="dashboard/tasks/:taskId" element={<SingleTask />} />
            </Route>

            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/onboarding" element={<ProtectedRoute><OnBoardingPage /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
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
            color: "#6b7280e0",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
