import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://project-nexus-backend-q5ai.onrender.com/graphql/',
    cache: new InMemoryCache(),
});

export default client;