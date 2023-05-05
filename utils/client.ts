import {
  subscriptionExchange,
  ExchangeInput,
  errorExchange,
  fetchExchange,
  dedupExchange,
  cacheExchange,
} from "@urql/core";
import { withUrqlClient } from "next-urql";
import { createClient as createWSClient } from "graphql-ws";
import { ExchangeIO, createClient } from "urql";

const isServerSide = typeof window === "undefined";

const wsClient = () =>
  createWSClient({
    url: "https://neutral-kodiak-70.hasura.app/v1/graphql".replace(
      "http",
      "ws"
    ),
    connectionParams: async () => {
      return isServerSide
        ? {
            headers: {
              // "x-hasura-admin-secret": process.env
              //   .HASURA_GRAPHQL_ADMIN_SECRET as string,
              "x-hasura-admin-secret":
                "vqd447DBq1zUd2WnTdNXrfBkXURnxHE7Z6L61VSz5wMWc9SfNFCk8a33lyVm2d4h",
            },
          }
        : {};
    },
  });

const noopExchange = ({ forward }: ExchangeInput): ExchangeIO => {
  return (operations$) => {
    const operationResult$ = forward(operations$);
    return operationResult$;
  };
};

const subscribeOrNoopExchange = () =>
  isServerSide
    ? noopExchange
    : subscriptionExchange({
        forwardSubscription: (operation) => {
          return {
            subscribe: (sink) => ({
              unsubscribe: wsClient().subscribe(operation, sink),
            }),
          };
        },
      });

const clientConfig = {
  url: "https://neutral-kodiak-70.hasura.app/v1/graphql",
  fetchOptions: () => {
    return isServerSide
      ? {
          headers: {
            // "x-hasura-admin-secret": process.env
            //   .HASURA_GRAPHQL_ADMIN_SECRET as string,
            "x-hasura-admin-secret":
              "vqd447DBq1zUd2WnTdNXrfBkXURnxHE7Z6L61VSz5wMWc9SfNFCk8a33lyVm2d4h",
          },
        }
      : {};
  },
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: (error) => {
        const isAuthError = error.graphQLErrors.some((e) => {
          return e.extensions?.code === "validation-failed";
        });
      },
    }),
    fetchExchange,
    subscribeOrNoopExchange(),
  ],
};

export const client = createClient(clientConfig);

export default withUrqlClient(() => ({
  // url: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT as string,
  url: "https://neutral-kodiak-70.hasura.app/v1/graphql",
  exchanges: [
    dedupExchange,
    cacheExchange,
    errorExchange({
      onError: (error) => {
        const isAuthError = error.graphQLErrors.some((e) => {
          return e.extensions?.code === "validation-failed";
        });
      },
    }),
    fetchExchange,
    subscribeOrNoopExchange(),
  ],
}));
