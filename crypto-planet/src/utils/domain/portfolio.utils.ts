import { IPortfolioTransaction } from "../../interfaces/portfolio.interfaces";

export function calculatePortfolioTotals(
  transactions: IPortfolioTransaction[]
) {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.status === "Succesful") {
        if (transaction.action === "Deposited") {
          acc.total += transaction.amount;
          acc.totalDeposited += transaction.amount;
        } else if (transaction.action === "Withdrawn") {
          acc.total -= transaction.amount;
          acc.totalWithdrawn += transaction.amount;
        }
      }
      return acc;
    },
    {
      total: 0,
      totalDeposited: 0,
      totalWithdrawn: 0,
    }
  );
}

export function getLastUpdateFromTransactions(
  transactions: IPortfolioTransaction[]
): string {
  if (transactions.length === 0) {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return sortedTransactions[0].date;
}

export function updatePortfolioWithNewTransaction(
  currentTransactions: IPortfolioTransaction[],
  newTransaction: IPortfolioTransaction
) {
  const updatedTransactions = [newTransaction, ...currentTransactions];
  const totals = calculatePortfolioTotals(updatedTransactions);
  const lastUpdate = getLastUpdateFromTransactions(updatedTransactions);
  return {
    ...totals,
    lastUpdate,
    transactions: updatedTransactions,
  };
}
