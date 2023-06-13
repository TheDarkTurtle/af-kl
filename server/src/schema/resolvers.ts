import { Resolvers } from "__generated__/types.js";

export const resolvers: Resolvers = {
  Query: {
    booking: async (_, args, context) => {
      return context.dataSources.bookingAPI.getBooking(args.code);
    },
  },
  Booking: {
    code: (parent) => parent.bookingCode,
  },
};
