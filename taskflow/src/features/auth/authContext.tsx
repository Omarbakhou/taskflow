import { createContext, useReducer, useMemo } from 'react';
import type { ReactNode } from 'react';
import { authReducer, initialState } from './authReducer';
import type { AuthState, AuthAction } from './authReducer';

// Create the AuthContext
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | null>(null);

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Memoize the context value
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}