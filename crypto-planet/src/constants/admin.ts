import { IUser } from "../interfaces/auth.interface";
import { transactionsData } from "../pages/Portfolio/Data/PortfolioData";
import {
  calculatePortfolioTotals,
  getLastUpdateFromTransactions,
} from "../utils/domain/portfolio.utils";

const totals = calculatePortfolioTotals(transactionsData);
const lastUpdate = getLastUpdateFromTransactions(transactionsData);

export const ADMIN_CREDENTIALS: IUser = {
  email: "admin@email.com",
  name: "Administrator",
  password: "admin",
  isAdmin: true,
  portfolio: {
    ...totals,
    lastUpdate,
    transactions: transactionsData,
  },
};
