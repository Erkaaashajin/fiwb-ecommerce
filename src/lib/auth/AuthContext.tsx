"use client";

import { createContext, useContext, useState, useCallback } from "react";

type AuthContextType = {
  user: any | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => Promise<void>;
  refetch: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  login: () => {},
  logout: async () => {},
  refetch: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const login = useCallback((token: string) => {
    localStorage.setItem("token", token);
    setLoading(true);
    // TODO: refetch user data
    setLoading(false);
  }, []);

  const logout = useCallback(async () => {
    try {
      localStorage.removeItem("token");
      setUser(null);
    } catch (e) {
      console.error("Logout failed", e);
    }
  }, []);

  const refetch = useCallback(() => {
    // TODO: implement user refetch
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refetch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}