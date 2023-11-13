import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

interface ProtectedComponentsProps {
  children: ReactNode;
}

interface ProtectedUniversalProps {
  children?: ReactNode;
  redirectPath?: string;
}

export function ProtectedComponents({ children }: ProtectedComponentsProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/public" />;
  return <>{children}</>;
}

export function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/public" />;
  return <Outlet />;
}

export function ProtectedUniversal({ children, redirectPath = "/public" }: ProtectedUniversalProps) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return children ? <>{children}</> : <Outlet />;
}
