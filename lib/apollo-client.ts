import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://graphql.icy.tools/graphql',
    cache: new InMemoryCache(),
        headers: {
            'x-api-key': `${process.env.API_KEY}`,
        },
});