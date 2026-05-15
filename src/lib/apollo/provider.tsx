"use client";

import { ApolloProvider } from "@apollo/client/react";
import { getApolloClient } from "./client";

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloProvider client={getApolloClient()}>{children}</ApolloProvider>
  );
}
