export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

export interface Booking {
  id: string;
  customerId: string;
  providerId: string;
  serviceId: string;
  vehicleId: string;
  status: BookingStatus;
  scheduledAt: string;
  totalPrice: number;
  notes?: string;
  createdAt: string;
}
