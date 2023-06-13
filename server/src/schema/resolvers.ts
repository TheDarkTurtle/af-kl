import { Resolvers } from "__generated__/types.js";

export const resolvers: Resolvers = {
  Query: {
    booking: () => ({}),
  },
  Booking: {
    code: () => "TEST",
  },
};
