import { ApolloProvider } from "@apollo/client";
import sanityClient from "./sanity-client";

import { PropsWithChildren } from "react";

const SanityApolloProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ApolloProvider client={sanityClient}>
      {children}
    </ApolloProvider>
  )
};

export default SanityApolloProvider;
