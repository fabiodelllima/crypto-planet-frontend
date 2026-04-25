import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import DefaultLayout from "../components/layout/DefaultLayout";
import AuthLayout from "../components/layout/AuthLayout";
import MarketPage from "../pages/Market/MarketPage";
import Loading from "../components/common/Loading";

const PortfolioPage = lazy(() => import("../pages/Portfolio/PortfolioPage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const RegisterPage = lazy(() => import("../pages/Register/RegisterPage"));
const NotFoundPage = lazy(() => import("../pages/Error/NotFoundPage"));

interface GuardProps {
  children: React.ReactNode;
}

// Both guards live at module scope so React keeps a stable component identity
// across renders. Declaring them inside Router would create a new component
// type on every render, forcing React to unmount and remount the subtree,
// resetting any state the children hold.
const PrivateRoute = ({ children }: GuardProps) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={"/login"} replace />;
  return <>{children}</>;
};

const PublicRoute = ({ children }: GuardProps) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to={"/portfolio"} replace />;
  return <>{children}</>;
};

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Navigate to="/market" replace />} />
        <Route
          path="/market"
          element={
            <Suspense fallback={<Loading />}>
              <MarketPage />
            </Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PrivateRoute>
              <Suspense fallback={<Loading />}>
                <PortfolioPage />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Suspense fallback={<Loading />}>
                <LoginPage />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Suspense fallback={<Loading />}>
                <RegisterPage />
              </Suspense>
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
}
