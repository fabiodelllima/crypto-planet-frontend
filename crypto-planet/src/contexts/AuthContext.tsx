import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/auth.interface";
import { StorageUtils } from "../utils/storage.util";
import { AuthContext } from "./AuthContextInstance";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = StorageUtils.getCurrentUser();
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
      const users = StorageUtils.getUsers();
      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (!foundUser) {
        throw new Error("Invalid credentials");
      }

      setUser(foundUser);
      StorageUtils.setCurrentUser(foundUser);
      navigate("/portfolio");
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (userData: Omit<IUser, "id">) => {
    try {
      const users = StorageUtils.getUsers();

      if (users.some((user) => user.email === userData.email)) {
        throw new Error("Email already registered");
      }

      const newUser = {
        ...userData,
        id: crypto.randomUUID(),
      };

      StorageUtils.saveUser(newUser);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
