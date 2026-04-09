// Moved shared constants or functions here to resolve fast refresh issue.

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  void action;
  // Reducer logic here
  return state;
};

export const initialState: AuthState = {
  // Initial state here
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AuthState {
  // Define the shape of the state here
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AuthAction {
  // Define the shape of the actions here
}

// Ensure authReducer and initialState are exported.