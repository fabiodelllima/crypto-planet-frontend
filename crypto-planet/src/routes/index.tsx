import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

import DefaultLayout from "../components/layout/DefaultLayout";
import MarketPage from "../pages/Market/MarketPage";
import Loading from "../components/common/Loading";

const PortfolioPage = lazy(() => import("../pages/Portfolio/PortfolioPage"));
const LoginPage = lazy(() => import("../pages/Login/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/Error/NotFoundPage"));

interface PrivateRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const PrivateRoute = ({ children, isAuthenticated }: PrivateRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return <>{children}</>;
};

export function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MarketPage />} />
        <Route path="/market" element={<MarketPage />} />

        <Route
          path="/portfolio"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Suspense fallback={<Loading />}>
                <PortfolioPage />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <LoginPage setIsAuthenticated={setIsAuthenticated} />
            </Suspense>
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
    </Routes>
  );
}
