export interface ServicePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  features: string[];
  imageUrl?: string;
  isActive: boolean;
}
