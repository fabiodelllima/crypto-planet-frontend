import {
  IPortfolioBalance,
  IPortfolioTransaction,
} from "../../../interfaces/portfolio.interfaces";
import { randomId } from "../../../utils/helpers.utils";

export const transactionsData: IPortfolioTransaction[] = [
  {
    id: randomId(),
    action: "Deposited",
    amount: 10000,
    date: "Feb 02, 2022",
    status: "Succesful",
  },
  {
    id: randomId(),
    action: "Deposited",
    amount: 10000,
    date: "Feb 03, 2022",
    status: "Rejected",
  },
  {
    id: randomId(),
    action: "Withdrawn",
    amount: 2000,
    date: "Feb 06, 2022",
    status: "Succesful",
  },
  {
    id: randomId(),
    action: "Deposited",
    amount: 15000,
    date: "Feb 06, 2022",
    status: "Succesful",
  },
  {
    id: randomId(),
    action: "Withdrawn",
    amount: 4000,
    date: "Feb 07, 2022",
    status: "Succesful",
  },
  {
    id: randomId(),
    action: "Deposited",
    amount: 5000,
    date: "Feb 08, 2022",
    status: "Succesful",
  },
  {
    id: randomId(),
    action: "Deposited",
    amount: 7000,
    date: "Feb 08, 2022",
    status: "Rejected",
  },
];

export const portfolioData: IPortfolioBalance = {
  total: 32455.12,
  totalDeposited: 32455.12,
  totalWithdrawn: 2000.12,
  lastUpdate: "16/02/2022 at 02:30 PM",
};
