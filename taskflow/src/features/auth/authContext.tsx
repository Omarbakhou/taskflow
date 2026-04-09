/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer, useMemo, useContext } from 'react';
import type { ReactNode } from 'react';
import { authReducer, initialState } from './authReducer';
import type { AuthState, AuthAction } from './authReducer';

// Create the AuthContext
export type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Memoize the context value
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}