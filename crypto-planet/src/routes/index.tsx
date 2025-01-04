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

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={"/login"} replace />;
  return <>{children}</>;
};

export function Router() {
  const { isAuthenticated } = useAuth();

  const PublicRoute = ({ children }: { children: React.ReactNode }) => {
    if (isAuthenticated) return <Navigate to={"/portfolio"} replace />;
    return <>{children}</>;
  };

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
