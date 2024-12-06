import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../components/layout/DefaultLayout";
import MarketPage from "../pages/Market/MarketPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import LoginPage from "../pages/Login/LoginPage";
import ErrorPage from "../pages/Error/ErrorPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MarketPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
