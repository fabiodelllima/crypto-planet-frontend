import { IUser } from "../interfaces/auth.interface";

export type AuthContextData = {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Omit<IUser, "id">) => Promise<void>;
};
