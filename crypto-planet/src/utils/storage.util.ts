import { IUser } from "../interfaces/auth.interface";

const USERS_KEY = "@crypto-planet:users";
const CURRENT_USER_KEY = "@crypto-planet:current-user";

export const StorageUtils = {
  getUsers: (): IUser[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  saveUser: (user: IUser) => {
    const users = StorageUtils.getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  getCurrentUser: (): IUser | null => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  setCurrentUser: (user: IUser | null) => {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  },
};
