export interface ProviderProfile {
  id: string;
  userId: string;
  businessName: string;
  bio?: string;
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  serviceRadiusKm: number;
  address?: string;
}
