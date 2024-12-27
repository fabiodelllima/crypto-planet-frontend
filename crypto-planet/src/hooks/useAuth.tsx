import { useContext } from "react";
import { AuthContextData } from "../types/auth.type";
import { AuthContext } from "../contexts/AuthContextInstance";

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
