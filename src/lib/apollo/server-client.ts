import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { cookies } from "next/headers";

const ENDPOINT = process.env.ERXES_ENDPOINT || process.env.GRAPHQL_URL ||
  process.env.NEXT_PUBLIC_ERXES_ENDPOINT || process.env.NEXT_PUBLIC_GRAPHQL_URL ||
  "https://erdenesaikhanamarsanaa.next.erxes.io/gateway/graphql";

const APP_TOKEN = process.env.ERXES_APP_TOKEN || "";

export async function getServerApolloClient() {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("token")?.value;

    return new ApolloClient({
      link: new HttpLink({
        uri: ENDPOINT,
        headers: {
          "x-app-token": APP_TOKEN,
          ...(authToken ? { authorization: `Bearer ${authToken}` } : {}),
        },
        fetchOptions: { cache: "no-store" },
      }),
      cache: new InMemoryCache(),
    });
  } catch {
    return new ApolloClient({
      link: new HttpLink({
        uri: ENDPOINT,
        headers: { "x-app-token": APP_TOKEN },
        fetchOptions: { cache: "no-store" },
      }),
      cache: new InMemoryCache(),
    });
  }
}
