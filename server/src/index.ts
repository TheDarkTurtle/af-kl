import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./schema/resolvers.js";
import { readFileSync } from "fs";
import { BookingAPI } from "./rest/booking-api.js";

const typeDefs = readFileSync("./src/schema/types.graphql", {
  encoding: "utf-8",
});

export interface Context {
  dataSources: {
    bookingAPI: BookingAPI;
  };
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({
    dataSources: {
      bookingAPI: new BookingAPI(),
    },
  }),
});

console.log(`🚀  Server ready at: ${url}`);
