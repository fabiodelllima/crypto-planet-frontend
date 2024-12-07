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

export const footerSections = [
  {
    title: "Exchange",
    links: [
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
    ],
  },
  {
    title: "Support",
    links: [
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
    ],
  },
  {
    title: "Resources",
    links: [
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
    ],
  },
  {
    title: "Learn",
    links: [
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
    ],
  },
  {
    title: "Company",
    links: [
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
      "Link para clicar",
    ],
  },
];

export const downloadButtons = [
  {
    icon: "X",
    title: "Download PC-Client",
    subtitle: "Windows",
  },
  {
    icon: "X",
    title: "Download for the",
    subtitle: "MacOS",
  },
  {
    icon: "X",
    title: "Download on the",
    subtitle: "App Store",
  },
  {
    icon: "X",
    title: "Get in on",
    subtitle: "Google Play",
  },
];

export const footerLinks = ["Privacy", "Terms", "Sitemap"];
