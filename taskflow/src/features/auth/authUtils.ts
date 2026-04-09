// Moved shared constants or functions here to resolve fast refresh issue.

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  // Reducer logic here
  return state;
};

export const initialState: AuthState = {
  // Initial state here
};

export interface AuthState {
  // Define the shape of the state here
}

export interface AuthAction {
  // Define the shape of the actions here
}

// Ensure authReducer and initialState are exported.