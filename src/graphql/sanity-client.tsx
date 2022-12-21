import { ApolloClient, InMemoryCache } from "@apollo/client";

export const sanityClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.SANITY_GRAPHQL_ENDPOINT,
});

export default sanityClient;
