export type UserRole = 'CUSTOMER' | 'PROVIDER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}
