import {
  Airport,
  Flight,
  QueryBookingArgs,
  Resolvers,
} from "__generated__/types.js";
import { GraphQLError } from "graphql";
import {
  AirportDTO,
  BookingDTO,
  MarketingFlightDTO,
} from "rest/booking-types.js";

export const resolvers: Resolvers = {
  Query: {
    booking: async (_, args, { dataSources }) => {
      const booking = await dataSources.bookingAPI.getBooking(args.code);

      if (!validateUserInputs(args)) {
        throw new GraphQLError("Wrong format");
      }

      if (!validateQueryBookingArgs(args, booking)) {
        throw new GraphQLError("Booking not found! Try PZIGZ3 / HESP");
      }

      return booking;
    },
  },
  Booking: {
    code: (parent) => parent.bookingCode,
  },
  Passenger: {
    title: (parent) => parent.title.name,
  },
  ContactDetail: {
    type: (parent) => parent["@class"],
    value: (parent) => parent.address.toLocaleLowerCase(),
  },
  Connection: {
    origin: (parent) => mapAirport(parent.origin),
    destination: (parent) => mapAirport(parent.destination),
  },
  Segment: {
    origin: (parent) => mapAirport(parent.departFrom),
    destination: (parent) => mapAirport(parent.arriveOn),
    flight: (parent) => mapFlight(parent.marketingFlight),
  },
};

function validateQueryBookingArgs(args: QueryBookingArgs, booking: BookingDTO) {
  if (args.code !== booking.bookingCode) {
    return false;
  }

  const mainPassenger = booking.passengers.find(({ id }) => id === 1);
  if (args.name !== mainPassenger?.lastName) {
    return false;
  }

  return true;
}

function validateUserInputs(args: QueryBookingArgs) {
  if (!/^[2-9a-zA-Z]{5,6}$/.test(args.code)) {
    return false;
  }

  if (!/^.{2,30}$/.test(args.name)) {
    return false;
  }

  return true;
}

function mapAirport(source: AirportDTO): Airport {
  return {
    code: source.IATACode,
    name: source.name,
    city: source.city.name,
    country: source.city.country.name,
  };
}

function mapFlight(source: MarketingFlightDTO): Flight {
  return {
    arrivalTerminal: source.operatingFlight.arrivalTerminal.name,
    cabin: source.operatingFlight.cabin.name,
    carrier: source.carrier.name,
    equipment: source.operatingFlight.equipment.name,
    number: source.carrier.code + source.number,
    numberOfStops: source.numberOfStops,
    status: source.status.name,
    checkInStart: source.operatingFlight.localCheckInStart,
    checkInEnd: source.operatingFlight.localCheckInEnd,
    scheduledArrival: source.operatingFlight.localScheduledArrival,
    scheduledDeparture: source.operatingFlight.localScheduledDeparture,
  };
}
