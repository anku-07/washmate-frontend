import { User } from './user';

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface LoginPayload {
  email: string;
  password?: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password?: string;
  role: 'CUSTOMER' | 'PROVIDER';
}
