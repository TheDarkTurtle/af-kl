import { QueryBookingArgs, Resolvers } from "__generated__/types.js";
import { GraphQLError } from "graphql";
import { BookingDTO } from "rest/booking-types.js";

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
