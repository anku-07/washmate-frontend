export type VehicleType = 'SEDAN' | 'SUV' | 'HATCHBACK' | 'TRUCK' | 'VAN' | 'COUPE' | 'OTHER';

export interface Vehicle {
  id: string;
  userId: string;
  make: string;
  model: string;
  year: number;
  color: string;
  licensePlate: string;
  type: VehicleType;
  createdAt: string;
}
