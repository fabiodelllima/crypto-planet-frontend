export interface IPortfolioTransaction {
  id: string;
  action: "Deposited" | "Withdrawn";
  amount: number;
  date: string;
  status: "Succesful" | "Rejected";
}

export interface IPortfolioBalance {
  total: number;
  totalDeposited: number;
  totalWithdrawn: number;
  lastUpdate: string;
}

export interface IPortfolioPayment {
  onSubmit: (amount: number) => void;
  className?: string;
}
