import { useContext } from "react";
import { AuthContext } from "./authProvider";

export function useAuth() {
  const { token, login, logout } = useContext(AuthContext);

  const isAuthenticated = Boolean(localStorage.getItem("authToken") && token);
  return { token, isAuthenticated, login, logout };
}
