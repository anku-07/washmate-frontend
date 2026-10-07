// API Endpoints constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    REFRESH: '/auth/refresh',
  },
  VEHICLES: '/vehicles',
  SERVICES: '/services',
  PROVIDERS: '/providers',
  BOOKINGS: '/bookings',
  PAYMENTS: '/payments',
  REVIEWS: '/reviews',
  USER: '/users',
} as const;
