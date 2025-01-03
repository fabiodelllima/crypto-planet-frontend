import { ADMIN_CREDENTIALS } from "../constants/admin";
import { IUser } from "../interfaces/auth.interface";
import { IPortfolioTransaction } from "../interfaces/portfolio.interfaces";

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export function getCurrentUser(): IUser | null {
  const userStr = localStorage.getItem(CURRENT_USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
}

export function getUsers(): IUser[] {
  const usersStr = localStorage.getItem(USERS_KEY);
  return usersStr ? JSON.parse(usersStr) : [];
}

export function saveUser(user: IUser): void {
  if (user.email === ADMIN_CREDENTIALS.email) {
    throw new Error("This email is not available");
  }

  const users = getUsers();

  const newUser = {
    ...user,
    portfolio: {
      total: 0,
      totalDeposited: 0,
      totalWithdrawn: 0,
      lastUpdate: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      transactions: [],
    },
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function setCurrentUser(user: IUser): void {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function updateUserTransactions(
  userId: string,
  transactions: IPortfolioTransaction[]
): void {
  const users = getUsers();
  const userIndex = users.findIndex((user) => user.email === userId);

  if (userIndex >= 0) {
    users[userIndex].portfolio = {
      ...users[userIndex].portfolio!,
      transactions,
    };

    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
}
