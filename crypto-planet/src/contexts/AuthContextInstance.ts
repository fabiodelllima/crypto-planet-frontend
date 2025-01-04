import { createContext } from "react";
import { AuthContextData } from "../types/auth.type";

export const AuthContext = createContext<AuthContextData | null>(null);
