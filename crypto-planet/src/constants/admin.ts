import { IUser } from "../interfaces/auth.interface";
import {
  portfolioData,
  transactionsData,
} from "../pages/Portfolio/Data/PortfolioData";

export const ADMIN_CREDENTIALS: IUser = {
  email: "admin@email.com",
  name: "Administrator",
  password: "admin",
  isAdmin: true,
  portfolio: {
    total: portfolioData.total,
    totalDeposited: portfolioData.totalDeposited,
    totalWithdrawn: portfolioData.totalWithdrawn,
    lastUpdate: portfolioData.lastUpdate,
    transactions: transactionsData,
  },
};
