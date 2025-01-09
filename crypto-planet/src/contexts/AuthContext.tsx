import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextInstance";
import { ADMIN_CREDENTIALS } from "../constants/admin";
import { IUser } from "../interfaces/auth.interface";
import {
  getCurrentUser,
  getUsers,
  saveUser,
  setCurrentUser,
} from "../utils/storage/auth.storage.utils";
import { randomId } from "../utils/common/id.utils";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();
  const users = getUsers();

  useEffect(() => {
    const savedUser = getCurrentUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    if (user && window.location.pathname === "/login") {
      navigate("/portfolio");
    }
  }, [user, navigate]);

  const login = async (email: string, password: string) => {
    try {
      if (
        email === ADMIN_CREDENTIALS.email &&
        password === ADMIN_CREDENTIALS.password
      ) {
        setUser(ADMIN_CREDENTIALS);
        setCurrentUser(ADMIN_CREDENTIALS);
        navigate("/portfolio");
        return;
      }

      const users = getUsers();
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        throw new Error("Invalid credentials");
      }

      setUser(foundUser);
      setCurrentUser(foundUser);
      navigate("/portfolio");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const register = async (userData: Omit<IUser, "id">) => {
    try {
      if (userData.email === ADMIN_CREDENTIALS.email) {
        throw new Error("This email is not available");
      }

      const users = getUsers();
      if (users.some((user) => user.email === userData.email)) {
        throw new Error("Email already registered");
      }

      const newUser = {
        ...userData,
        id: randomId(),
        isAdmin: false,
        portfolio: {
          total: 0,
          totalDeposited: 0,
          totalWithdrawn: 0,
          lastUpdate: new Date().toLocaleDateString(),
          transactions: [],
        },
      };

      saveUser(newUser);
      navigate("/login");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isAdmin: user?.isAdmin || false,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
