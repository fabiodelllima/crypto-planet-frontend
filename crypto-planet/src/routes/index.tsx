import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../components/layout/DefaultLayout";
import MarketPage from "../pages/Market/MarketPage";
import PortfolioPage from "../pages/Portfolio/PortfolioPage";
import LoginPage from "../pages/Login/LoginPage";
import NotFoundPage from "../pages/Error/NotFoundPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<MarketPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
