import type { ReactNode } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthContext } from "../../contexts/AuthContextInstance";
import type { AuthContextData } from "../../types/auth.type";
import type { IPortfolioTransaction } from "../../interfaces/portfolio.interfaces";
import PortfolioPage from "./PortfolioPage";

vi.mock("./Table/PortfolioTable", () => ({
  default: ({ data }: { data: IPortfolioTransaction[] }) => (
    <div data-testid="portfolio-table">{`${data.length} transactions`}</div>
  ),
}));

vi.mock("../../components/common/PaymentForm", () => ({
  default: ({ onSubmit }: { onSubmit: (amount: number) => void }) => (
    <button data-testid="submit-payment" onClick={() => onSubmit(50)}>
      submit
    </button>
  ),
}));

vi.mock("../../components/common/Modal", () => ({
  default: ({
    isOpen,
    children,
  }: {
    isOpen: boolean;
    children: ReactNode;
  }) => (isOpen ? <div data-testid="modal">{children}</div> : null),
}));

vi.mock("../../components/common/Container", () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock("../../components/common/Button", () => ({
  default: ({
    children,
    onClick,
  }: {
    children: ReactNode;
    onClick?: () => void;
    buttonType?: string;
    buttonSize?: string;
    className?: string;
  }) => <button onClick={onClick}>{children}</button>,
}));

vi.mock("../../utils/storage/auth.storage.utils", () => ({
  updateUserTransactions: vi.fn(),
}));

function buildAuthValue(
  transactions: IPortfolioTransaction[]
): AuthContextData {
  return {
    user: {
      email: "user@example.com",
      name: "Test User",
      password: "x",
      portfolio: {
        total: 0,
        totalDeposited: 0,
        totalWithdrawn: 0,
        lastUpdate: "Jan 01, 2024",
        transactions,
      },
    },
    isAuthenticated: true,
    isAdmin: false,
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
  };
}

function renderWithAuth(value: AuthContextData) {
  return render(
    <AuthContext.Provider value={value}>
      <PortfolioPage />
    </AuthContext.Provider>
  );
}

describe("PortfolioPage", () => {
  it("renders the user's transactions in the table", () => {
    const transactions: IPortfolioTransaction[] = [
      {
        id: "1",
        action: "Deposited",
        amount: 100,
        date: "Jan 01, 2024",
        status: "Succesful",
      },
      {
        id: "2",
        action: "Withdrawn",
        amount: 30,
        date: "Jan 02, 2024",
        status: "Succesful",
      },
    ];

    renderWithAuth(buildAuthValue(transactions));

    expect(screen.getByTestId("portfolio-table")).toHaveTextContent(
      "2 transactions"
    );
  });

  it("appends a transaction optimistically on payment submit", async () => {
    const user = userEvent.setup();
    renderWithAuth(buildAuthValue([]));

    expect(screen.getByTestId("portfolio-table")).toHaveTextContent(
      "0 transactions"
    );

    const submitButtons = screen.getAllByTestId("submit-payment");
    await user.click(submitButtons[0]);

    expect(screen.getByTestId("portfolio-table")).toHaveTextContent(
      "1 transactions"
    );
  });

  it("masks the wallet balance when the toggle is activated", async () => {
    const user = userEvent.setup();
    const transactions: IPortfolioTransaction[] = [
      {
        id: "1",
        action: "Deposited",
        amount: 1000,
        date: "Jan 01, 2024",
        status: "Succesful",
      },
      {
        id: "2",
        action: "Withdrawn",
        amount: 250,
        date: "Jan 02, 2024",
        status: "Succesful",
      },
    ];

    renderWithAuth(buildAuthValue(transactions));

    expect(screen.getByText(/\$750/)).toBeInTheDocument();

    const hideButton = screen.getByAltText("Hide balance").closest("button");
    expect(hideButton).not.toBeNull();

    await user.click(hideButton!);

    expect(screen.getByText(/\$\*{6}/)).toBeInTheDocument();
  });
});
