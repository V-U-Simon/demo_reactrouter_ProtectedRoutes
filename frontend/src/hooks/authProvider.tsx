import React, { createContext, useMemo, useState, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  login: () => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const initialToken = localStorage.getItem("authToken");
  const [token, setToken] = useState<string | null>(initialToken);

  async function login() {
    localStorage.setItem("authToken", "some-token");
    setToken("some-token");
  }

  async function logout() {
    localStorage.removeItem("authToken");
    setToken(null);
  }

  const memoValues = useMemo(() => ({ token, login, logout }), [token]);

  return <AuthContext.Provider value={memoValues}>{children}</AuthContext.Provider>;
};
