import {
  IPortfolioBalance,
  IPortfolioTransaction,
} from "./portfolio.interfaces";

export interface IUser {
  email: string;
  name: string;
  password: string;
  isAdmin?: boolean;
  portfolio?: IPortfolioBalance & {
    transactions: IPortfolioTransaction[];
  };
}
