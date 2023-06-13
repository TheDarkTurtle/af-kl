import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./schema/resolvers.js";
import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/schema/types.graphql", {
  encoding: "utf-8",
});

export interface Context {
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
