export type BookingDTO = {
  bookingCode: string;
  contactDetails: ContactDetailDTO[];
  itinerary: ItineraryDTO;
  passengers: PassengerDTO[];
};

export type ContactDetailDTO = {
  "@class": string;
  address: string;
};

export type ItineraryDTO = {
  type: string;
  connections: ConnectionDTO[];
};

export type ConnectionDTO = {
  id: number;
  duration: string;
  origin: AirportDTO;
  destination: AirportDTO;
  segments: SegmentDTO[];
};

export type AirportDTO = {
  IATACode: string;
  name: string;
  city: CityDTO;
};

export type CityDTO = {
  IATACode: string;
  name: string;
  country: CodeNameDTO;
};

export type CodeNameDTO = {
  code: string;
  name: string;
};

export type SegmentDTO = {
  id: number;
  type: string;
  informational: boolean;
  departFrom: AirportDTO;
  arriveOn: AirportDTO;
  marketingFlight: MarketingFlightDTO;
};

export type MarketingFlightDTO = {
  number: string;
  carrier: CodeNameDTO;
  status: CodeNameDTO;
  numberOfStops: number;
  sellingClass: CodeNameDTO;
  operatingFlight: OperatingFlightDTO;
};

export type OperatingFlightDTO = {
  number: string;
  carrier: CodeNameDTO;
  duration: string;
  flown: boolean;
  checkInStart: string;
  localCheckInStart: string;
  checkInEnd: string;
  localCheckInEnd: string;
  scheduledArrival: string;
  localScheduledArrival: string;
  scheduledDeparture: string;
  localScheduledDeparture: string;
  arrivalTerminal: CodeNameDTO;
  cabin: CodeNameDTO;
  equipment: CodeNameDTO;
};

export type PassengerDTO = {
  id: number;
  firstName: string;
  lastName: string;
  title: CodeNameDTO;
};
