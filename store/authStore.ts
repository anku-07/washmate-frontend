// Auth state store placeholder
export interface AuthState {
  token: string | null;
  user: unknown | null;
}

export const initialAuthState: AuthState = {
  token: null,
  user: null,
};
