import { IUser } from "../interfaces/auth.interface";

export const ADMIN_CREDENTIALS: IUser = {
  email: "admin@email.com",
  name: "Administrator",
  password: "admin",
  isAdmin: true,
  portfolio: {
    total: 100000,
    totalDeposited: 75000,
    totalWithdrawn: 25000,
    lastUpdate: "Jan 03, 2024",
    transactions: [
      {
        id: "1",
        action: "Deposited",
        amount: 50000,
        date: "Jan 01, 2024",
        status: "Succesful",
      },
      {
        id: "2",
        action: "Deposited",
        amount: 25000,
        date: "Jan 02, 2024",
        status: "Succesful",
      },
      {
        id: "3",
        action: "Withdrawn",
        amount: 25000,
        date: "Jan 03, 2024",
        status: "Succesful",
      },
    ],
  },
};
