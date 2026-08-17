import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Outlet } from "react-router-dom";
import type { AuthContextData } from "../types/auth.type";
import { Router } from "./index";

const mockUseAuth = vi.fn();

vi.mock("../hooks/useAuth", () => ({
  useAuth: () => mockUseAuth(),
}));

vi.mock("../components/layout/DefaultLayout", () => ({
  default: () => <Outlet />,
}));

vi.mock("../components/layout/AuthLayout", () => ({
  default: () => <Outlet />,
}));

vi.mock("../pages/Market/MarketPage", () => ({
  default: () => <div>Market Page Mock</div>,
}));

vi.mock("../pages/Portfolio/PortfolioPage", () => ({
  default: () => <div>Portfolio Page Mock</div>,
}));

vi.mock("../pages/Login/LoginPage", () => ({
  default: () => <div>Login Page Mock</div>,
}));

vi.mock("../pages/Register/RegisterPage", () => ({
  default: () => <div>Register Page Mock</div>,
}));

vi.mock("../pages/Error/NotFoundPage", () => ({
  default: () => <div>NotFound Page Mock</div>,
}));

vi.mock("../components/common/Loading", () => ({
  default: () => <div>Loading Mock</div>,
}));

function buildAuthValue(isAuthenticated: boolean): AuthContextData {
  return {
    user: isAuthenticated
      ? { email: "user@example.com", name: "Test", password: "x" }
      : null,
    isAuthenticated,
    isAdmin: false,
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
  };
}

function renderAt(path: string, isAuthenticated: boolean) {
  mockUseAuth.mockReturnValue(buildAuthValue(isAuthenticated));

  return render(
    <MemoryRouter initialEntries={[path]}>
      <Router />
    </MemoryRouter>
  );
}

describe("Router guards", () => {
  beforeEach(() => {
    mockUseAuth.mockReset();
  });

  it("redirects anonymous user from /portfolio to /login", async () => {
    renderAt("/portfolio", false);
    expect(await screen.findByText("Login Page Mock")).toBeInTheDocument();
  });

  it("renders portfolio for authenticated user at /portfolio", async () => {
    renderAt("/portfolio", true);
    expect(await screen.findByText("Portfolio Page Mock")).toBeInTheDocument();
  });

  it("redirects authenticated user from /login to /portfolio", async () => {
    renderAt("/login", true);
    expect(await screen.findByText("Portfolio Page Mock")).toBeInTheDocument();
  });

  it("renders login for anonymous user at /login", async () => {
    renderAt("/login", false);
    expect(await screen.findByText("Login Page Mock")).toBeInTheDocument();
  });
});
