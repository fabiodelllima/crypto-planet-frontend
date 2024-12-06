import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../components/layout/DefaultLayout";
import MarketPage from "../pages/MarketPage";
import PortfolioPage from "../pages/PortfolioPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";

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
