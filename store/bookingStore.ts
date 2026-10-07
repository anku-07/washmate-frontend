// Booking state store placeholder
export interface BookingState {
  selectedServiceId: string | null;
  selectedProviderId: string | null;
  selectedVehicleId: string | null;
  scheduledTime: string | null;
}

export const initialBookingState: BookingState = {
  selectedServiceId: null,
  selectedProviderId: null,
  selectedVehicleId: null,
  scheduledTime: null,
};
