import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { AuthContext } from "./AuthContextInstance";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

function Consumer() {
  const ctx = useContext(AuthContext);
  if (!ctx) return null;

  return (
    <div>
      <span data-testid="email">{ctx.user?.email ?? "anon"}</span>
      <span data-testid="auth">{String(ctx.isAuthenticated)}</span>
      <button
        onClick={() => {
          ctx.login("admin@email.com", "admin").catch(() => {});
        }}
      >
        login-admin
      </button>
      <button
        onClick={() => {
          ctx.login("nope@example.com", "wrong").catch(() => {});
        }}
      >
        login-bad
      </button>
      <button onClick={() => ctx.logout()}>logout</button>
    </div>
  );
}

function renderProvider() {
  return render(
    <MemoryRouter>
      <AuthProvider>
        <Consumer />
      </AuthProvider>
    </MemoryRouter>
  );
}

describe("AuthProvider", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("starts anonymous when localStorage is empty", () => {
    renderProvider();
    expect(screen.getByTestId("email")).toHaveTextContent("anon");
    expect(screen.getByTestId("auth")).toHaveTextContent("false");
  });

  it("hydrates user from localStorage on mount", async () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: "saved@example.com",
        name: "Saved",
        password: "x",
      })
    );

    renderProvider();
    expect(await screen.findByText("saved@example.com")).toBeInTheDocument();
    expect(screen.getByTestId("auth")).toHaveTextContent("true");
  });

  it("logs in admin and navigates to /portfolio", async () => {
    const user = userEvent.setup();
    renderProvider();

    await user.click(screen.getByText("login-admin"));

    expect(screen.getByTestId("email")).toHaveTextContent("admin@email.com");
    expect(mockNavigate).toHaveBeenCalledWith("/portfolio");
  });

  it("rejects invalid credentials and keeps user anonymous", async () => {
    const user = userEvent.setup();
    renderProvider();

    await user.click(screen.getByText("login-bad"));

    expect(screen.getByTestId("email")).toHaveTextContent("anon");
    expect(screen.getByTestId("auth")).toHaveTextContent("false");
  });

  it("logout clears state and navigates to /market", async () => {
    const user = userEvent.setup();
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email: "saved@example.com",
        name: "Saved",
        password: "x",
      })
    );

    renderProvider();
    await screen.findByText("saved@example.com");

    await user.click(screen.getByText("logout"));

    expect(screen.getByTestId("email")).toHaveTextContent("anon");
    expect(mockNavigate).toHaveBeenCalledWith("/market");
  });
});
