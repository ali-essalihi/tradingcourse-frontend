import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { accessTokenStorageKey, authKy, baseKy, clearRefreshTokenTimer } from "../api";
import { HTTPError } from "ky";

interface User {
  email: string;
  name: string | null;
  picture: string | null;
}

interface ContextValue {
  loading: boolean;
  error: Error | null;
  user: User | null;
  logout: () => void;
}

const UserContext = createContext<ContextValue>({
  loading: true,
  error: null,
  user: null,
  logout: () => {}
});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<ContextValue["loading"]>(true);
  const [error, setError] = useState<ContextValue["error"]>(null);
  const [user, setUser] = useState<ContextValue["user"]>(null);

  useEffect(() => {
    authKy
      .get<User>("auth/me")
      .json()
      .then(data => setUser(data))
      .catch(err => {
        const is401 = err instanceof HTTPError && err.response.status === 401;
        if (!is401) setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setLoading(false);
    setError(null);
    clearRefreshTokenTimer();
    localStorage.removeItem(accessTokenStorageKey);
    return baseKy.post("auth/logout");
  }, []);

  const value = useMemo(() => {
    return { loading, error, user, logout };
  }, [loading, error, user, logout]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
